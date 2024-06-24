import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { getSdk } from ".";
import { crypto } from "@ledgerhq/hw-trustchain";

const handlers = [
  http.get(`URL`, () => {
    return HttpResponse.json({});
  }),
];

const mockServer = setupServer(...handlers);

jest.mock("@ledgerhq/hw-trustchain", () => {
  return {
    crypto: {
      randomKeypair: jest.fn(() => {
        return Promise.resolve({
          privateKey: new Uint8Array([1, 2, 3, 4, 5]),
          publicKey: new Uint8Array([1, 2, 3, 4, 5]),
        });
      }),
      to_hex: (data: Uint8Array) => {
        return "0x" + data.reduce((acc, i) => acc + i.toString(16).padStart(2, "0"), "");
      },
    },
  };
});

describe("TrustchainSDK", () => {
  const sdk = getSdk(false, { applicationId: 16, name: "test" });

  beforeAll(() => {
    mockServer.listen();
  });

  beforeEach(() => {
    mockServer.resetHandlers();
  });

  afterAll(() => {
    mockServer.close();
  });

  describe("TrustchainSDK", () => {
    const sdk = getSdk(false, { applicationId: 16, name: "test" });

    test("initMemberCredentials should initialize member credentials", async () => {
      const creds = await sdk.initMemberCredentials();
      expect(creds).toBeDefined();
      expect(crypto.randomKeypair).toHaveBeenCalled();
    });

    test("authWithDevice should authenticate with device", async () => {});

    test("auth should authenticate with trustchain", async () => {
      // Placeholder implementation
    });

    test("getOrCreateTrustchain should create or get a trustchain", async () => {
      // Placeholder implementation
    });

    test("restoreTrustchain should restore a trustchain", async () => {
      // Placeholder implementation
    });

    test("getMembers should list members of the trustchain", async () => {
      // Placeholder implementation
    });

    test("removeMember should remove a member from the trustchain", async () => {
      // Placeholder implementation
    });

    test("addMember should add a member to the trustchain", async () => {
      // Placeholder implementation
    });

    test("destroyTrustchain should destroy the trustchain", async () => {
      // Placeholder implementation
    });

    test("encryptUserData should encrypt user data", async () => {
      // Placeholder implementation
    });

    test("decryptUserData should decrypt user data", async () => {
      // Placeholder implementation
    });
  });
});
