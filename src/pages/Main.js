import React from "react";
import { Switch, Route } from "react-router-dom";
import CustomData from "./CustomData";
import Home from "../App";
import AboutUs from "./AboutUs";
import Login from "./Login";
import signup from "./Signup";
import logout from "./logout";
const Main = () => {
  return (
    <Switch>
      {/* The Switch decides which component to show based on the current URL.*/}
      
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/signup" component={signup}></Route>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/customdata" component={CustomData}></Route>
      <Route exact path="/about" component={AboutUs}></Route>
      <Route exact path="/logout" component={logout}></Route>

      
    </Switch>
  );
};

export default Main;
