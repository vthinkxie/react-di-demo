import React, { FC } from "react";
import { OrderService } from "./service/order.service";

export const Order: FC = () => {
  const orderService = new OrderService();
  return (
    <button onClick={() => orderService.confirmOrder("submit order")}>
      Submit Order
    </button>
  );
};
