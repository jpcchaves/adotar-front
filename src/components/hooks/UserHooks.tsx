import { useEffect, useState } from "react";
import { getLoggedinUser } from "../../helpers/api_helper";

const useProfile = () => {
  const userProfileSession = getLoggedinUser();
  const token = userProfileSession && userProfileSession["accessToken"];
  const [loading, setLoading] = useState(userProfileSession ? false : true);
  const [userProfile, setUserProfile] = useState(userProfileSession ? userProfileSession : null);

  useEffect(() => {
    const userProfileSession = getLoggedinUser();
    const token = userProfileSession && userProfileSession["accessToken"];
    setUserProfile(userProfileSession ? userProfileSession.user : null);
    setLoading(token ? false : true);
  }, []);

  return { userProfile, loading, token };
};

export { useProfile };
