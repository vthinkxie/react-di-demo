import React, { FC } from "react";
import { Order } from "./Order";
import { SMSLogin } from "./SMSLogin";
import { WeiXinLogin } from "./WeiXinLogin";

export const Main: FC = () => {
  return (
    <>
      <WeiXinLogin></WeiXinLogin>
      <SMSLogin></SMSLogin>
      <Order></Order>
    </>
  );
};
