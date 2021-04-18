import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import { useParams } from "react-router-dom";

const Book = () => {
  const { _id } = useParams();
  const [service, setServices] = useState([]);
  console.log(service);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  useEffect(() => {
    fetch(`http://localhost:5000/service/${_id}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container mt-5">
      <h1>Book</h1>
      <div className="Book">
        <h1>{service.name}</h1>
      </div>
    </div>
  );
};

export default Book;
