import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

import { useProfile } from "../components/hooks/UserHooks";
import { loadAuth, logout } from "slices/auth/login/reducer";
import {setAuthToken} from "../utils/http";

const AuthProtected = (props: any) => {
  const dispatch: any = useDispatch();
  const { userProfile, loading, token } = useProfile();

  useEffect(() => {
    if (userProfile && !loading && token) {
      setAuthToken(token);
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
