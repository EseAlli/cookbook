<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import App from "../App";
import Recipe from "./Recipe";

const Routers = () => (
  <Router>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/recipe/:id" component={Recipe} />
    </Switch>
  </Router>
);

export default Routers;
=======
<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import App from "../App";
import Recipe from "./Recipe";

const Routers = () => (
  <Router>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/recipe/:id" component={Recipe} />
    </Switch>
  </Router>
);

export default Routers;
=======
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import App from "../App";
import Recipe from "./Recipe";

const Routers = () => (
  <Router>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/recipe/:id" component={Recipe} />
    </Switch>
  </Router>
);

export default Routers;
>>>>>>> 0e12c0db8534bc361781b77da184e51ebdcb0fbd
>>>>>>> 8cd950aa0191971d394012f74d0e6db777c54cc9
