import { getInput } from "@actions/core";
import stream from "stream";
import { S3Client, GetObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { Readable } from "stream";
import express from "express";
import * as path from "path";
import * as fs from "fs";
import asyncHandler from "./utils/asyncHandler";
import { cacheDirectory, absoluteCacheDirectory, portFileName } from "./utils/constants";

async function startServer() {
  const app = express();
  const client = new S3Client({
    region: getInput("region"),
  });
  const bucket = getInput("bucket-name");
  const serverToken = getInput("server-token", {
    required: true,
    trimWhitespace: true,
  });

  app.all("*", (req, res, next) => {
    console.info(`Got a ${req.method} request`, req.path);
    const { authorization = "" } = req.headers;
    const [type = "", token = ""] = authorization.split(" ");

    if (type !== "Bearer" || token !== serverToken) {
      return res.status(401).send("Unauthorized");
    }

    next();
  });

  app.get(
    "/v8/artifacts/:artifactId",
    asyncHandler(async (req: any, res: any) => {
      const { artifactId } = req.params;
      const filename = artifactId + ".gz";

      const command = new GetObjectCommand({
        Bucket: bucket,
        Key: filename,
      });

      try {
        // const response = await client.send(command);
        // const byteArray = response?.Body?.transformToByteArray();
        const item = await client.send(command);

        console.log(`Artifact ${artifactId} streamed successfully`);
        return (item?.Body as Readable)?.pipe(res);
      } catch (err) {
        console.error(err);
        console.log(`Artifact ${artifactId} not found.`);
        return res.status(404).send("Not found");
      }
    }),
  );

  app.put(
    "/v8/artifacts/:artifactId",
    asyncHandler(async (req, res) => {
      const artifactId = req.params.artifactId;
      const filename = `${artifactId}.gz`;
      console.log("REQUEST");
      console.log(req);
      console.log("headers", req.headers);

      let contentLength = 0;

      // Create a PassThrough stream to calculate the content length
      const passThrough = new stream.PassThrough();
      req.pipe(passThrough);

      passThrough.on("data", (chunk: any) => {
        contentLength += chunk.length;
      });

      // Wait for the stream to end to ensure content length is calculated
      await new Promise((resolve, reject) => {
        passThrough.on("end", resolve);
        passThrough.on("error", reject);
      });

      try {
        const command = new PutObjectCommand({
          Bucket: bucket,
          Key: filename,
          Body: req,
          ContentLength: contentLength,
        });
        await client.send(command);
        return res.end();
      } catch (error: any) {
        console.log(error);
        const errorDetails = {
          message: error.message,
          stack: error.stack,
          name: error.name,
          code: error.code,
        };
        console.log(errorDetails);
        console.error("Error uploading artifact:", errorDetails);
        return res.status(500).json(errorDetails);
      }
    }),
  );

  app.post("/v8/artifacts/events", (req, res) => {
    // Analytics endpoint, just ignore it
    res.status(200).send();
  });

  const server = app.disable("etag").listen(0);
  server.once("listening", () => {
    const port = "" + server.address().port;
    console.log(`Cache dir: ${cacheDirectory}`);
    console.log(`Local Turbo server is listening at http://127.0.0.1:${port}`);
    fs.writeFileSync(path.resolve(absoluteCacheDirectory, portFileName), port);
  });
}

startServer().catch(error => {
  console.error(error);
  process.exit(1);
});
