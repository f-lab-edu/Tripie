export type Token = {
  name?: string;
  email?: string;
  picture?: string;
  sub?: string;
  iat: number;
  exp: number;
  jti: string;
  ip?: string;
  id?: string;
};

export type User = {
  session: {
    user: {
      name: Token['name'];
      email?: Token['email'];
      image?: string;
      id?: string;
      picture?: Token['picture'];
      ip?: string;
    };
    expires: string;
    token?: Token;
  };
  token: Token;
};
