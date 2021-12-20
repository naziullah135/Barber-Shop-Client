import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AddReview from "./components/Dashboard/AddReview";
import AddService from "./components/Dashboard/AddService";
import BookList from "./components/Dashboard/BookList";
import Dashboard from "./components/Dashboard/Dashboard";
import MakeAdmin from "./components/Dashboard/MakeAdmin";
import ManageServices from "./components/Dashboard/ManageServices";
import Orders from "./components/Dashboard/Orders";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/Login/PrivateRoute";
import NotFound from "./components/NotFound/NotFound";


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/dashboard/:id">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/addservice">
            <AddService />
          </PrivateRoute>
          <PrivateRoute path="/book">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/booking">
            <BookList />
          </PrivateRoute>
          <PrivateRoute path="/addreview">
            <AddReview />
          </PrivateRoute>
          <PrivateRoute path="/addadmin">
            <MakeAdmin />
          </PrivateRoute>
          <PrivateRoute path="/orders">
            <Orders />
          </PrivateRoute>
          <PrivateRoute path="/manageservices">
            <ManageServices />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
