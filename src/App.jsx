import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./stylesheets/App.scss";
import "@fontsource/roboto";
import "@fontsource/fira-code";

// import firebase from "./firebase/config";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Signup from "./components/pages/user/Signup";
import LandingPage from "./components/pages/LandingPage";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <LandingPage />
      
      {/* <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />

          <Route exact path="/signup" component={Signup} />
        </Switch>
      </div> */}
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
