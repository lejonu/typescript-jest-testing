export interface IAuthData {
  usernameToLower: string;
  usernameCharacteres: Array<string>;
  userDetails: Object | undefined;
  isAuthenticated: boolean;
}
