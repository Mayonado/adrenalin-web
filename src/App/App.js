import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { routes } from "../routes";
import Page404 from "../pages/Page404/Page404";

const App = () => {
  return (
    <Router>
      <Suspense fallback={<>Loading...</>}>
        <Switch>
          {routes.map((route) => (
            <Route {...route} key={route.path} />
          ))}
          <Route component={Page404} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
