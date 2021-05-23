// @flow
import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../scss/App.scss";
import firebase from "../firebase/config";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Signup from "./pages/user/Signup"

export default function App() {
  return (
    
    <BrowserRouter>
      <div className="app">
        <div className="ui grid container">
          <Switch>
            <Route exact path='/signup' component={Signup} />
          </Switch>
        </div>
      </div>
   </BrowserRouter>

  );
}

/* function App() {
  return (
    <Provider store={store}>
      <InboxScreen />
    </Provider>
  );
} */
// export default App;
