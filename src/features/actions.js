const DATA_USER = "DATA_USER";
const LOGIN_USER = "LOGIN_USER";
const EDIT_USER = "EDIT_USER";
const LOGOUT_USER = "LOGOUT_USER";

export const dataAction = (data) => ({
   type: DATA_USER,
   payload: data,
});

export const loginAction = (data) => ({
   type: LOGIN_USER,
   payload: data.body.token,
});

export const editAction = (userName) => ({
   type: EDIT_USER,
   payload: userName,
});

export const logoutAction = () => ({
   type: LOGOUT_USER,
});
