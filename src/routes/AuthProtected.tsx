import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { setAuthorization } from "../helpers/api_helper";

import { useProfile } from "../components/hooks/UserHooks";
import { loadAuth, logout } from "slices/auth/login/reducer";

const AuthProtected = (props: any) => {
  const dispatch: any = useDispatch();
  const { userProfile, loading, token } = useProfile();

  useEffect(() => {
    if (userProfile && !loading && token) {
      setAuthorization(token);
      dispatch(loadAuth({ accessToken: token, user: userProfile }));
    } else if (!userProfile && loading && !token) {
      dispatch(logout());
    }
  }, [token, userProfile, loading, dispatch]);

  /*
    Navigate is un-auth access protected routes via url
    */

  if (!userProfile && loading && !token) {
    return <Navigate to={{ pathname: "/entrar" }} />;
  }

  return <>{props.children}</>;
};

export default AuthProtected;
