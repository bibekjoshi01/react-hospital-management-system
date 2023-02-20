import React, { Fragment } from "react";
import ProtectedRoute from "./ProtectedRoute";

function ClinicRoute() {
  return (
    <Fragment>
      <Switch>
        <ProtectedRoute 
        exact
        path=""
        />
      </Switch>
    </Fragment>
  );
}

export default ClinicRoute;
