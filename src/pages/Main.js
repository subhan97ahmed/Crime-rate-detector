import React from "react";
import { Switch, Route } from "react-router-dom";
import CustomData from "./CustomData";
import Home from "../App";
import AboutUs from "./AboutUs";

const Main = () => {
  return (
    <Switch>
      {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/customdata" component={CustomData}></Route>
      <Route exact path="/about" component={AboutUs}></Route>
    </Switch>
  );
};

export default Main;
