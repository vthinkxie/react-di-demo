import React, { FC } from "react";
import { LoginService } from "./service/login.service";
import { SMSAuthService } from "./service/auth.service";

export const SMSLogin: FC = () => {
  const authService = new SMSAuthService();
  const loginService = new LoginService(authService);
  return <button onClick={() => loginService.login()}>Login</button>;
};
