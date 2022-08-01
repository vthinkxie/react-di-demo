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
import { OrderService } from "./service/order.service";

export const Main: FC = () => {
  return (
    <DIContainer
      providers={[
        OrderService,
        LoginService,
        { provide: DialogService, useClass: AppleDialogService },
        { provide: AuthService, useClass: SMSAuthService },
      ]}
    >
      <Login></Login>
      <DIContainer
        providers={[
          LoginService,
          { provide: AuthService, useClass: WeiXinAuthService },
        ]}
      >
        <Login></Login>
      </DIContainer>
      <Order></Order>
    </DIContainer>
  );
};
