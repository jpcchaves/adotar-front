import React from "react";
import { Route, Routes } from "react-router-dom";

//layouts
import NonAuthLayout from "../layouts/NonAuthLayout";
import VerticalLayout from "../layouts/index";

//routes
import Error500 from "modules/errors/pages/500";
import { ErrorBoundary } from "react-error-boundary";
import AuthProtected from "./AuthProtected";
import {authProtectedRoutes, publicRoutes} from "./allRoutes";

const Index = () => {
  return (
    <React.Fragment>
      <ErrorBoundary fallback={<Error500 />}>
        <Routes>
          <Route>
            {publicRoutes.map(
              (route: { path: string | undefined; component: any }, idx: React.Key | null | undefined) => (
                <Route
                  path={route.path}
                  element={<NonAuthLayout>{route.component}</NonAuthLayout>}
                  key={idx}
                  // exact={true}
                />
              ),
            )}
          </Route>

          <Route>
            {authProtectedRoutes.map((route, idx) => (
              <Route
                path={route.path}
                element={
                  <AuthProtected>
                    <VerticalLayout>{route.component}</VerticalLayout>
                  </AuthProtected>
                }
                key={idx}
                // exact={true}
              />
            ))}
          </Route>
        </Routes>
      </ErrorBoundary>
    </React.Fragment>
  );
};

export default Index;
