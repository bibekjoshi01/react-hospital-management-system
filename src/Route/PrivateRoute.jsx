import React, { Suspense, lazy } from "react";
import { Redirect, Route } from "react-router";
import ProtectedRoute from "./ProtectedRoute";
import { Switch } from "react-router-dom";
import ClinicRoute from "./ClinicRoute";
import InventoryRoute from "./InventoryRoute";

const PrivateRoutes = () => {
  return (
    <>
      <Suspense fallback={<ListingSkeleton />}>
        <Switch>
            <ClinicRoute />
            <InventoryRoute />
          {/* <Route path="*" /> */}
        </Switch>
      </Suspense>
    </>
  );
};

export default PrivateRoutes;
