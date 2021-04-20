import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import { useParams } from "react-router-dom";
import Payment from "./Payment";
import "./Book.css";

const Book = () => {
  const { id } = useParams();
  const [service, setService] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  console.log(loggedInUser);

  useEffect(() => {
    fetch(`https://peaceful-journey-87547.herokuapp.com/service/${id}`)
      .then((res) => res.json())
      .then((data) => setService(data[0]));
  }, []);

  const submitOrder = () => {
    const newOrder = {
      ...loggedInUser,
      serviceName: service.name,
      price: service.price,
      image: service.imageURL,
    };
    console.log(newOrder);
    fetch("https://peaceful-journey-87547.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newOrder),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Your order is successful.");
      });
  };
  return (
    <div>
      <h1 className="pl-4">Book</h1>
      <div className="Book bg-light p-4">
        <form action="">
          <input
            class="form-control data-field"
            type="text"
            value={loggedInUser.name}
            readonly
          ></input>
          <br />
          <input
            type="text"
            readonly
            class="form-control data-field"
            value={loggedInUser.email}
          ></input>
          <br />
          <input
            type="text"
            readonly
            class="form-control data-field"
            value={service.name}
          ></input>
          <br />
          <input
            type="text"
            readonly
            class="form-control data-field"
            value={service.price}
          ></input>
        </form>
        <br />
        <div className="data-field">
          <h5 className="text-secondary">Pay with credit card</h5>
          <br />
          <Payment></Payment>
          <br />
        </div>
        <div className="d-flex justify-content-end data-field">
          <button onClick={submitOrder} className="btn btn-brand text-white">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Book;
