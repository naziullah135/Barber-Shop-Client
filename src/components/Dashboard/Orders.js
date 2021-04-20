import React, { useEffect, useState } from "react";
import OrderDetails from "./OrderDetails";
import Sidebar from "./Sidebar";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://peaceful-journey-87547.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  return (
    <div className="row">
      <div className="col-md-3">
        <Sidebar />
      </div>
      <div className="col-md-9 mt-5">
        <h2>Orders List</h2>
        <br />
        <table style={{ width: "900px" }}>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Service Name</th>
            <th>Price</th>
          </tr>
          {orders.map((order) => (
            <OrderDetails order={order}></OrderDetails>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Orders;
