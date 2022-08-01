import React, { FC } from "react";
import { Order } from "./Order";
import { Login } from "./Login";
import { DIContainer } from "./util";
import { AppleDialogService, DialogService } from "./service/dialog.service";
import {
  AuthService,
  SMSAuthService,
  WeiXinAuthService,
} from "./service/auth.service";
import { LoginService } from "./service/login.service";

export const Main: FC = () => {
  return (
    <DIContainer
      providers={[
        LoginService,
        { provide: DialogService, useClass: AppleDialogService },
        { provide: AuthService, useClass: SMSAuthService },
      ]}
    >
      <Login></Login>
      <Order></Order>
    </DIContainer>
  );
};
