import {
  LOGIN_ERROR,
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGOUT_ERROR,
  LOGOUT_PENDING,
  LOGOUT_SUCCESS,
  SIGN_UP_ERROR,
  SIGN_UP_PENDING,
  SIGN_UP_SUCCESS,
  SET_AUTHENTICATION
} from './constants';

const initialState = {
  isLoading: false,
  authenticated: false,
  role: null,
  email: null,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_PENDING:
    case LOGOUT_PENDING:
    case SIGN_UP_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case LOGIN_ERROR:
    case LOGOUT_ERROR:
    case SIGN_UP_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        authenticated: true,
        role: action.payload.role
      };
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        authenticated: false,
        role: null
      };
    }
    case SIGN_UP_SUCCESS: {
      return {
        ...state,
        isLoading: false
      };
    }
    case SET_AUTHENTICATION: {
      return {
        ...state,
        authenticated: true,
        role: action.payload.role,
        email: action.payload.email
      };
    }
    default:
      return state;
  }
};

export default reducer;