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
