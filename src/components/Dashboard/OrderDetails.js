import React from "react";

const OrderDetails = ({ order }) => {
  return (
    <tr>
      <td>{order.name}</td>
      <td>{order.email}</td>
      <td>{order.serviceName}</td>
      <td>{order.price}</td>
    </tr>
  );
};

export default OrderDetails;
