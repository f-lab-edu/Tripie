export type Token = {
  name?: string;
  email?: string;
  picture?: string;
  sub?: string;
  iat: number;
  exp: number;
  jti: string;
};

export type User = {
  session: {
    user: { name: Token['name']; email?: Token['email']; image?: string; id?: string; picture?: Token['picture'] };
    expires: string;
    token?: Token;
  };
  token: Token;
};
