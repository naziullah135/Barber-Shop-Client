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
    <div className="d-flex">
          <Sidebar></Sidebar>
        <div className="row m-5">
        {
            orders.map(order => <OrderDetails order={order}></OrderDetails>)
        }
        </div>
    </div>
  );
};

export default Orders;
