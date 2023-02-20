import React, { FC, useMemo } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, RouteProps } from "react-router";
import { ReferenceContext, useAppSelector } from "../Utils/appHooks";
import { ProtectedRouteProps } from "./types";


const ProtectedRoute = () => ({
  component: Component,
  permission,
  path,
  ...rest
}) => {
  return (
    <>
      <Route
        {...rest}
        render={(props) => {
          return (
            <ReferenceContext.Provider>
              <Component {...props} />
            </ReferenceContext.Provider>
          );
        }}
      />
    </>
  );
};

export default React.memo(ProtectedRoute);
