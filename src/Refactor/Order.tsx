import React, { FC } from "react";
import { OrderService } from "./service/order.service";
import { useInject } from "./util";

export const Order: FC = () => {
  const orderService = useInject(OrderService);
  return (
    <button onClick={() => orderService.confirmOrder("Submit Order")}>
      Submit Order
    </button>
  );
};
