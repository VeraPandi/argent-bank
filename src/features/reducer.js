/**
 * Redux reducer - Manages user states and actions
 * @const {object} initialState - State
 * @property {string} token - User token
 * @property {boolean} isLogged - If "true", the user is logged in
 * @property {string} user.body.firstName - User's first name
 * @property {string} user.body.lastName - User's last name
 */

const initialState = {
   user: null,
   isLogged: false,
   token: null,
};

export const userReducer = (state = initialState, action) => {
   switch (action.type) {
      case "LOGIN_USER":
         return {
            ...state,
            token: action.payload,
            isLogged: true,
         };

      case "DATA_USER":
         return {
            ...state,
            user: action.payload,
         };

      case "EDIT_USER":
         return {
            ...state,
            user: {
               ...state.user,
               body: {
                  ...state.user.body,
                  firstName: action.payload.firstName,
                  lastName: action.payload.lastName,
               },
            },
         };

      default:
         return state;
   }
};
