import { subscriptionsGuard } from "../subscriptions.guard";

describe("subscriptionsGuard", () => {
  it("should return true if the newspaper has no rights", () => {
    expect(subscriptionsGuard([], [])).toBe(true);
  });

  it("should return true if the user has the same rights as the newspaper", () => {
    expect(subscriptionsGuard(["RIGHT_1"], ["RIGHT_1"])).toBe(true);
  });

  it("should return true if the user has a right that is included in the newsletters rights", () => {
    expect(subscriptionsGuard(["RIGHT_1", "RIGHT_3"], ["RIGHT_1", "RIGHT_2"])).toBe(true);
  });

  it("should return false if the user do not have the newspaper right", () => {
    expect(subscriptionsGuard(["RIGHT_1"], ["RIGHT_2"])).toBe(false);
  });

  it("should return false if the user do not have the newspaper right", () => {
    expect(subscriptionsGuard(["RIGHT_1", "RIGHT_5"], ["RIGHT_2", "RIGHT_3", "RIGHT_6"])).toBe(false);
  });

  it("should return false if the user do not have the newspaper right", () => {
    expect(subscriptionsGuard(["RIGHT_1"], ["RIGHT_2"])).toBe(false);
  });
});
