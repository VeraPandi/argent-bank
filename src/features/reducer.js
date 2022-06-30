const initialState = {
   token: null,
   isLogged: false,
};

export const userReducer = (state = initialState, action) => {
   switch (action.type) {
      case "LOGIN_USER":
         return {
            ...state,
            token: action.payload,
            isLogged: true,
         };

      default:
         return state;
   }
};
