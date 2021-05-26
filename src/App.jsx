import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./stylesheets/App.scss";
import "@fontsource/roboto";
import firebase from "./firebase/config";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Signup from "./components/pages/user/Signup";
import {Header} from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Switch>
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </div>
    </BrowserRouter>
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
