import React, { FC } from "react";
import { OrderService } from "./service/order.service";

export const Order: FC = () => {
  const orderService = new OrderService();
  return (
    <button onClick={() => orderService.confirmOrder("Submit Order")}>
      Submit Order
    </button>
  );
};
