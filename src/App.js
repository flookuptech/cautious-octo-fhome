import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss";

import Index from "views/Index.jsx";
import About from "./components/about";
import Landing from "views/examples/Landing.jsx";
import Login from "views/examples/Login.jsx";
import Profile from "views/examples/Profile.jsx";
import Register from "views/examples/Register.jsx";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={props => <Index {...props} />} />
        <Route path="/about"
         exact
         render={props => <About {...props} />}
         />
        <Route
          path="/landing-page"
          exact
          render={props => <Landing {...props} />}
        />
        <Route
          path="/login-page"
          exact
          render={props => <Login {...props} />}
        />
        <Route
          path="/profile-page"
          exact
          render={props => <Profile {...props} />}
        />
        <Route
          path="/register-page"
          exact
          render={props => <Register {...props} />}
        />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

// ReactDOM.render(
//   <BrowserRouter>
//     <Switch>
//       <Route path="/" exact render={props => <Index {...props} />} />
//       <Route
//         path="/landing-page"
//         exact
//         render={props => <Landing {...props} />}
//       />
//       <Route path="/login-page" exact render={props => <Login {...props} />} />
//       <Route
//         path="/profile-page"
//         exact
//         render={props => <Profile {...props} />}
//       />
//       <Route
//         path="/register-page"
//         exact
//         render={props => <Register {...props} />}
//       />
//       <Redirect to="/" />
//     </Switch>
//   </BrowserRouter>,
//   document.getElementById("root")
// );
