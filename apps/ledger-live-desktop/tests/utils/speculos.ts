import invariant from "invariant";
import { log } from "@ledgerhq/logs";
import {
  listAppCandidates,
  createSpeculosDevice,
  releaseSpeculosDevice,
  findAppCandidate,
  SpeculosTransport,
} from "@ledgerhq/live-common/load/speculos";
import { SpeculosDevice, Specs } from "@ledgerhq/speculos-transport";
import type { AppCandidate } from "@ledgerhq/coin-framework/bot/types";
import axios from "axios";
import { getEnv } from "@ledgerhq/live-env";
import { waitForTimeOut } from "./waitFor";

export async function startSpeculos(
  testName: string,
  spec: Specs[keyof Specs],
): Promise<SpeculosDevice | undefined> {
  log("engine", `test ${testName}`);

  const { SEED, COINAPPS } = process.env;

  const seed = SEED;
  invariant(seed, "SEED is not set");
  const coinapps = COINAPPS;
  invariant(coinapps, "COINAPPS is not set");
  let appCandidates;

  if (!appCandidates) {
    appCandidates = await listAppCandidates(coinapps);
  }

  const { appQuery, dependency, dependencies, onSpeculosDeviceCreated } = spec;
  const appCandidate = findAppCandidate(appCandidates, appQuery);
  if (!appCandidate) {
    console.warn("no app found for " + testName);
    console.warn(appQuery);
    console.warn(JSON.stringify(appCandidates, undefined, 2));
  }
  invariant(
    appCandidate,
    "%s: no app found. Are you sure your COINAPPS is up to date?",
    testName,
    coinapps,
  );
  log(
    "engine",
    `test ${testName} will use ${appCandidate.appName} ${appCandidate.appVersion} on ${appCandidate.model} ${appCandidate.firmware}`,
  );
  const deviceParams = {
    ...(appCandidate as AppCandidate),
    appName: spec.currency ? spec.currency.managerAppName : spec.appQuery.appName,
    seed,
    dependency,
    dependencies,
    coinapps,
    onSpeculosDeviceCreated,
  };

  try {
    return await createSpeculosDevice(deviceParams);
  } catch (e: unknown) {
    if (process.env.CI) console.error(e);
    console.error(e);
    log("engine", `test ${testName} failed with ${String(e)}`);
  }
}

export async function stopSpeculos(device: Device | undefined) {
  if (device) {
    log("engine", `test ${device.id} finished`);
    await releaseSpeculosDevice(device.id);
  }
}

interface Event {
  text: string;
}

interface ResponseData {
  events: Event[];
}

export async function waitFor(text: string, maxAttempts: number = 10): Promise<string[]> {
  const speculosApiPort = getEnv("SPECULOS_API_PORT");
  let attempts = 0;
  let textFound: boolean = false;
  while (attempts < maxAttempts && !textFound) {
    const response = await axios.get<ResponseData>(
      `http://127.0.0.1:${speculosApiPort}/events?stream=false&currentscreenonly=true`,
    );
    const responseData = response.data;
    const texts = responseData.events.map(event => event.text);

    if (texts[0].includes(text)) {
      textFound = true;
      return texts;
    }
    attempts++;
    await waitForTimeOut(500);
  }
  return [];
}

export async function pressBoth() {
  const speculosApiPort = getEnv("SPECULOS_API_PORT");
  await axios.post(`http://127.0.0.1:${speculosApiPort}/button/both`, {
    action: "press-and-release",
  });
}

export async function pressRightUntil(text: string, maxAttempts: number = 10): Promise<string[]> {
  const speculosApiPort = getEnv("SPECULOS_API_PORT");
  let attempts = 0;
  let textFound: boolean = false;
  while (attempts < maxAttempts && !textFound) {
    const response = await axios.get<ResponseData>(
      `http://127.0.0.1:${speculosApiPort}/events?stream=false&currentscreenonly=true`,
    );
    const responseData = response.data;
    const texts = responseData.events.map(event => event.text);

    if (texts[0].includes(text)) {
      textFound = true;
      return texts;
    }

    await axios.post(`http://127.0.0.1:${speculosApiPort}/button/right`, {
      action: "press-and-release",
    });
    attempts++;
  }

  if (attempts === maxAttempts) {
    throw new Error(
      `ElementNotFoundException: Element with text "${text}" not found on speculos device`,
    );
  }
  await waitForTimeOut(100);
  return [];
}

export function verifyAddress(address: string, text: string[]): boolean {
  const textConcat = text.slice(1).join("");
  return textConcat.includes(address);
}

export function verifyAmount(amount: string, text: string[]): boolean {
  const amountDevice = text[1];
  return amountDevice.includes(amount);
}
