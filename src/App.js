import React,{Suspense, lazy} from "react";
import { BrowserRouter,
   Route,
   Switch,
   Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss";

import Loader from "components/Loader/loader";

class App extends React.Component {
  render(){

    const Index = lazy(() => import("../src/views/Index"));
    const About = lazy(() => import("../src/components/about"));
    const Infographics = lazy(() => import("../src/components/infographics"));


  return (
    <BrowserRouter>
     <Suspense fallback={<Loader/>}>
      <Switch>
        <Route path="/" exact render={props => <Index {...props} />} />
        <Route path="/about"
         exact
         render={props => <About {...props} />}
         />
         <Route path="/infographics"
         exact
         render={props => <Infographics {...props} />}
         />
        <Redirect to="/" />
      </Switch>
      </Suspense>
    </BrowserRouter>
  );
  }
}

export default App;

