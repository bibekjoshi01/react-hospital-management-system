import React from "react";
import ProtectedRoute from "./ProtectedRoute";
import InventoryDashboard from "../components/dashboard/InventoryDashboard";

function InventoryRoute() {
  return (
    <Fragment>
      <Switch>
        <ProtectedRoute
          exact
          path="/inventory/dashboard"
          component={InventoryDashboard}
          permission=""
        />
        <ProtectedRoute
          exact
          path="/inventory/item"
          component={InventoryDashboard}
          permission=""
        />
      </Switch>
    </Fragment>
  );
}

export default InventoryRoute;
