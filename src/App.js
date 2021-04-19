import React, { createContext, useState } from 'react';
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import PrivateRoute from './components/Login/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard';
import AddService from './components/Dashboard/AddService';
import AddReview from './components/Dashboard/AddReview';
import Book from './components/Dashboard/Book';
import Orders from './components/Dashboard/Orders';

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
        <Route path="/addservice">
          <AddService />
        </Route>
        <Route path="/book">
          <Dashboard />
        </Route>
        <Route path="/addreview">
          <AddReview />
        </Route>
        <Route path="/orders">
          <Orders />
        </Route>
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
