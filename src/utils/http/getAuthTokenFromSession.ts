export const getAuthTokenFromSession = () => {
  const obj = sessionStorage.getItem("authUser");

  if (obj) {
    const objJson = JSON.parse(obj);

    if (objJson.accessToken) {
      return { Authorization: `Bearer ${objJson.accessToken}` };
    }
  }

  return;
};
