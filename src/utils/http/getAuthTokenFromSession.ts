export const getAuthTokenFromSession = () => {
  const obj = sessionStorage.getItem("authUser");

  if (obj) {
    const objJson = JSON.parse(obj);

    return objJson.accessToken;
  }

  return;
};
