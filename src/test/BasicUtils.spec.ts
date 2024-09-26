import { product } from "../app/BasicUtils";

describe("BasicUtils test suite", () => {
  it("returns the product of 3 an 2", () => {
    const actual = product(3, 2);
    expect(actual).toBe(6);
  });
});
