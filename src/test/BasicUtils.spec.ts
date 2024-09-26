import { authenticateUser, product } from "../app/BasicUtils";

describe("BasicUtils test suite", () => {
  it("returns the product of 3 an 2", () => {
    // arrange
    const sut = product;

    // acting
    const actual = sut(3, 2);

    // asserting
    expect(actual).toBe(6);
    expect(actual).toEqual(6);
    expect(actual).toBeLessThan(10);
    expect(actual).toBeGreaterThan(4);
  });

  // Nested describe
  describe("Authentication test suite", () => {
    it("return the lower case of a valid user", () => {
      const sut = authenticateUser;
      const actual = sut("deveLOPER", "dev");
      expect(actual.usernameToLower).toBe("developer");
    });

    it("return the username characters of a valid user", () => {
      const sut = authenticateUser;
      const actual = sut("deveLOPER", "dev");
      // testing arrays or objects use toEqual
      expect(actual.usernameCharacteres).toEqual([
        "d",
        "e",
        "v",
        "e",
        "L",
        "O",
        "P",
        "E",
        "R",
      ]);

      // Check if the array contains a particular character
      expect(actual.usernameCharacteres).toContain("R");
    });

    it("return the username shuffled characters of a valid user", () => {
      const sut = authenticateUser;
      const actual = sut("deveLOPER", "dev");
      // testing arrays or objects use toEqual
      // Check if the array contains a particular character
      expect(actual.usernameCharacteres).toEqual(
        expect.arrayContaining(["L", "O", "P", "E", "R", "d", "e", "v", "e"])
      );
    });

    it("return the username details object from a valid user", () => {
      const sut = authenticateUser;
      const actual = sut("deveLOPER", "dev");
      // testing arrays or objects use toEqual
      expect(actual.userDetails).toEqual({});
    });

    it("return if username details object is defined", () => {
      const sut = authenticateUser;
      const actual = sut("deveLOPER", "dev");

      expect(actual.userDetails).toBeDefined();
      expect(actual.userDetails).not.toBeUndefined();
      expect(actual.userDetails).toBeTruthy();
      expect(actual.userDetails).not.toBeFalsy();
    });

    it("return if user is authenticated", () => {
      const sut = authenticateUser;
      const actual = sut("deveLOPER", "dev");

      expect(actual.isAuthenticated).toBeTruthy();
    });
  });

  //   //only runs just a block of test
  //   it.only("User authentication", () => {
  //     const sut = authenticateUser;
  //     const actual = sut("deveLOPER", "dev");
  //     expect(actual.usernameToLower).toBe("developer");
  //   });
});
