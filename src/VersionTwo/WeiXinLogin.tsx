import React, { FC } from "react";
import { LoginService } from "./service/login.service";
import { WeiXinAuthService } from "./service/auth.service";

export const WeiXinLogin: FC = () => {
  const authService = new WeiXinAuthService();
  const loginService = new LoginService(authService);
  return <button onClick={() => loginService.login()}>Login</button>;
};
