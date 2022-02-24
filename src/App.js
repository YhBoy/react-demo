import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { adminRoute } from "./routes";
import PageNotFound from "./pages/PageNotFound/index";
import Frame from "./components/Frame";

function App(props) {
  return (
    <Frame>
      <Switch>
        {adminRoute.map((route) => {
          return (
            <Route
              key={route}
              path={route.path}
              exact={route.exact}
              render={(routeProps) => {
                return <route.component {...routeProps}></route.component>;
              }}
            />
          );
        })}
        <Route component={PageNotFound} />
      </Switch>
    </Frame>
  );
}

export default App;
