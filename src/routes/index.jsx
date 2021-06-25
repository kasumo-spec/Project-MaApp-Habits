import { Switch, Route } from "react-router-dom";

import Header from "../components/Header";

import RegisterPage from "../pages/Register";
import Login from "../pages/Login";
import GroupsPage from "../pages/Groups";
import AllGroups from "../pages/AllGroups";
import Dashboard from "../pages/Dashboard/index";
import Home from "../pages/Home";

const Routes = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/register">
          <RegisterPage />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/dashboard">
          <Dashboard />
        </Route>

        <Route path="/groups">
          <GroupsPage />
        </Route>

        <Route path="/allgroups">
          <AllGroups />
        </Route>

        <Route>
          <Home />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
