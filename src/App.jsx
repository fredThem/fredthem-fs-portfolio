import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./stylesheets/App.scss";
import "@fontsource/roboto";
import "@fontsource/fira-code";

// import firebase from "./firebase/config";
import { BrowserRouter } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";
import Header from "./components/Header";
import SkillTreeGrid from "./components/pages/SkillTreeGrid";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <LandingPage />
      <SkillTreeGrid />
      <div className={"container-fluid"} style={{ backgroundColor: "#27153E" }}>
        <div className="container-sm p-5">
          <img
            src="https://res.cloudinary.com/hjtkps4jr/image/upload/v1623415311/hero/skill-tree/noteWorthy_qjxkj2.png"
            alt=""
            className={"img-fluid"}
          />
        </div>
      </div>
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
