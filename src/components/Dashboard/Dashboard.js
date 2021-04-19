import React from "react";
import Book from "./Book";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div className="row">
      <div className="col-md-3">
        <Sidebar />
      </div>
      <div className="col-md-9 mt-5">
        <Book />
      </div>
    </div>
  );
};

export default Dashboard;
