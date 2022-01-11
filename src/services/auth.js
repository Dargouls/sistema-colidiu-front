export const TOKEN_KEY = "@web-colidiu-token";
export const USER_KEY = "@web-colidiu-user";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const setToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};
export const logout = () => {
  localStorage.removeItem(USER_KEY);
  localStorage.removeItem(TOKEN_KEY);
};

export const getUser = () => JSON.parse(localStorage.getItem(USER_KEY));
export const setUser = (user) => {
  localStorage.removeItem(USER_KEY);
  console.log("user: ", user)
  user = JSON.stringify(user);
  localStorage.setItem(USER_KEY, user);
};
