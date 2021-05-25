import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./stylesheets/App.scss";

import firebase from "./firebase/config";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Signup from "./components/pages/user/Signup";
import AppNav from "./components/AppNav";

function App() {
  return (
    <div className="App bg-topographic">
      <AppNav />
    </div>
  );
}

export default App;

/* function App() {
  return (
    <Provider store={store}>
      <InboxScreen />
    </Provider>
  );
} */
// export default App;
