import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import { useParams } from "react-router-dom";
import './Book.css';

const Book = () => {
  const { id } = useParams();
  const [service, setServices] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  useEffect(() => {
    fetch(`https://peaceful-journey-87547.herokuapp.com/service/${id}`)
      .then((res) => res.json())
      .then((data) => setServices(data[0]));
  }, []);
  return (
    <div className="container mt-5">
      <h1>Book</h1>
      <div className="Book bg-light p-5">
      <form action="">
      <input class="form-control data-field" type="text" value={loggedInUser.name} readonly></input>
      <br/>
      <input type="text" readonly class="form-control data-field" value={loggedInUser.email}></input>
      <br/>
      <input type="text" readonly class="form-control data-field" value={service.name}></input>
      </form>
      </div>
    </div>
  );
};

export default Book;
