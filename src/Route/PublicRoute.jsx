import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
const Login = lazy(() => import("../Pages/Login/Login"));

const PublicRoutes = () => {
  return (
    <>
      <Suspense fallback="">
        <Switch>
          <Route path="/"><h1>Hello Login</h1></Route>
        </Switch>
      </Suspense>
    </>
  );
};

export default PublicRoutes;
