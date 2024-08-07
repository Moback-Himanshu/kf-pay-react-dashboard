export type CreateUser = {
  email: string;
  password: string;
  userName: string;
};

export type CheckAccount = {
  username: string;
  password: string;
};

export type TokenResponse = {
  api_token: string;
  handle: string;
};

export type CurrentUser = {
  _id: string;
  email: string;
  userName: string;
};
