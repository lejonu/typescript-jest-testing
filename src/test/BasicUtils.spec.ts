import {
  authenticateUser,
  product,
  userNameLowerCase,
  UserNameToLowercase,
} from "../app/BasicUtils";

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

  // parameterized test
  it.each([
    // 2*3=6
    [2, 3, 6],
    // 0*7=0 ...
    [0, 7, 0],
    [10, 10, 100],
    [2, 2, 4],
  ])(
    "parameterized test!!! should return the product of %i and %i as %i",
    (a, b, expected) => {
      const actual = product(a, b);
      expect(actual).toEqual(expected);
    }
  );

  it.each([
    { input: "AugustiNE", expected: "augustine" },
    { input: "beauTY", expected: "beauty" },
    { input: "BOB", expected: "bob" },
  ])(
    "$input to lowercase shoud be $expected from parameterized testing.",
    ({ input, expected }) => {
      const actual = userNameLowerCase(input);
      expect(actual).toBe(expected);
    }
  );

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

  describe("class UserNameToLowercase test suite", () => {
    //  setup
    let sut: UserNameToLowercase;

    // runs before each block of test
    beforeEach(() => {
      console.log("setup from here");
      sut = new UserNameToLowercase();
    });

    // runs after each block of test
    // afterEach(() => {
    //   console.log("teardown from here");
    // });

    it("returns the lower case of a valid username", () => {
      const actual = sut.toLower("Bob");
      console.log("I am the main test");
      expect(actual).toBe("bob");
    });

    it("throws an error for an invalid username", () => {
      // must be wrapped within a function
      expect(() => sut.toLower("")).toThrow();
      expect(() => sut.toLower("")).toThrowErrorMatchingSnapshot(
        "Invalid username!"
      );
    });

    it("throws an error for an invalid username in a function", () => {
      function handleError() {
        const actual = sut.toLower("");
      }

      expect(handleError).toThrow();
    });

    it.todo("Test to do later");
  });

  // describe.only - runs only this particular block
  // describe.skip - skips this block
  // it.todo - marks a test to do later
});
