import PropTypes from "prop-types";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

//redux
import { useDispatch } from "react-redux";

import { useAppSelector } from "hooks/redux/useRedux";
import { logout } from "slices/auth/login/reducer";
import withRouter from "../../../../components/common/withRouter";

const Logout = () => {
  const dispatch = useDispatch();
  const { user, accessToken } = useAppSelector((state) => state.Auth);

  useEffect(() => {
    dispatch(logout());
    sessionStorage.removeItem("authUser");
  }, [dispatch]);

  if (!user || !accessToken) {
    return <Navigate to="/entrar" />;
  }

  return <></>;
};

Logout.propTypes = {
  history: PropTypes.object,
};

export default withRouter(Logout);
