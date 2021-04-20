import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import ListDetails from "./ListDetails";
import Sidebar from "./Sidebar";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  useEffect(() => {
    fetch("https://peaceful-journey-87547.herokuapp.com/books", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, [loggedInUser]);

  return (
    <div className="row">
      <div className="col-md-3">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-9 mt-5">
        <div className="row">
          {books.map((order) => (
            <ListDetails order={order}></ListDetails>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookList;
