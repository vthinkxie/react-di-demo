import React, { FC } from "react";
import { LoginService } from "./service/login.service";
import { useInject } from "./util";

export const Login: FC = () => {
  const loginService = useInject(LoginService);
  return <button onClick={() => loginService.login()}>Login</button>;
};
