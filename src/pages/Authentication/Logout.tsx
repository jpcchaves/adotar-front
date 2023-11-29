import PropTypes from "prop-types";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

import { logoutUser } from "../../slices/thunks";

//redux
import { useDispatch, useSelector } from "react-redux";

import { createSelector } from "reselect";
import withRouter from "../../Components/Common/withRouter";

const Logout = (props: any) => {
  const dispatch: any = useDispatch();

  const isUserLogoutSelector = createSelector(
    (state: any) => state.Login.isUserLogout,
    (isUserLogout) => isUserLogout,
  );
  const isUserLogout = useSelector(isUserLogoutSelector);

  useEffect(() => {
    dispatch(logoutUser());
  }, [dispatch]);

  if (isUserLogout) {
    return <Navigate to="/entrar" />;
  }

  return <></>;
};

Logout.propTypes = {
  history: PropTypes.object,
};

export default withRouter(Logout);
