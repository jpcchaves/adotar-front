import { useEffect, useState } from "react";
import { getLoggedinUser } from "../../utils/http";

const useProfile = () => {
  const userProfileSession = getLoggedinUser();
  const token = userProfileSession && userProfileSession["accessToken"];
  const [loading, setLoading] = useState(!userProfileSession);
  const [userProfile, setUserProfile] = useState(userProfileSession ? userProfileSession : null);

  useEffect(() => {
    const userProfileSession = getLoggedinUser();
    const token = userProfileSession && userProfileSession["accessToken"];
    setUserProfile(userProfileSession ? userProfileSession.user : null);
    setLoading(!token);
  }, []);

  return { userProfile, loading, token };
};

export { useProfile };
