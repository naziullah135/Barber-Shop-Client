import React from "react";
import Book from "./Book";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div className="d-flex">
      <Sidebar />
     <Book />
    </div>
  );
};

export default Dashboard;
