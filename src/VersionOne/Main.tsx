import React, { FC } from "react";
import { Order } from "./Order";
import { Login } from "./Login";

export const Main: FC = () => {
  return (
    <>
      <Login></Login>
      <Order></Order>
    </>
  );
};
