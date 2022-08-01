import React, { FC } from "react";
import { LoginService } from "./service/login.service";

export const Login: FC = () => {
  const loginService = new LoginService();
  return <button onClick={() => loginService.login()}>Login</button>;
};
