export const SIGN_UP = 'SIGN_UP';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export function authReducer(state = null, action) {
    switch (action.type) {
    case SIGN_UP: 
    case LOGIN:
      return action.payload && action.payload.user ? action.payload.user : {};
    case LOGOUT:
      return null;
    default:
      return state;
    }
}