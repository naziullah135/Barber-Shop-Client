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
          <Sidebar></Sidebar>
          </div>
        <div className="col-md-9 mt-5">
       <div className="row">
       {
            orders.map(order => <OrderDetails order={order}></OrderDetails>)
        }
       </div>
        </div>
    </div>
  );
};

export default Orders;
