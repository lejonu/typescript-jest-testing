import { IAuthData } from "./authData";

export function product(a: number, b: number): number {
  return a * b;
}

export function authenticateUser(
  username: string,
  password: string
): IAuthData {
  const authStatus = username === "deveLOPER" && password === "dev";
  return {
    usernameToLower: username.toLowerCase(),
    usernameCharacteres: username.split(""),
    userDetails: {},
    isAuthenticated: authStatus,
  };
}

export function userNameLowerCase(username: string): string {
  return username.toLowerCase();
}
// next line make coverage ignore all that is below
/* istanbul ignore next */
export class UserNameToLowercase {
  public toLower(username: string): string {
    if (username.trim() === "") {
      throw new Error("Invalid username!");
    }
    return username.toLowerCase();
  }
}
