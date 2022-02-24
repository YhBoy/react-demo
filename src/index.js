import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./pages/Login/index";
import { mainRoute, adminRoute } from "./routes/index";
import PageNotFound from "./pages/PageNotFound";
import { AppProvider } from "./store";

ReactDOM.render(
  <AppProvider>
    <Router>
      <Switch>
        <Route
          path="/admin"
          render={(routeProps) => {
            return <App {...routeProps} />;
          }}
        />
        {mainRoute.map((route) => {
          return <Route key={route.path} {...route} />;
        })}
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  </AppProvider>,
  document.getElementById("root")
);
