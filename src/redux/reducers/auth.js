import {
  LOGIN_SUCCESS,
  DATA_FAILED,
  DATA_LOADING,
  LOGOUT_SUCCESS,

} from "../actions/types";
const initialState = {
  isLoggedIn: false,
  token: "",
  userId: "",
  user: null,
  isLoading: false,
  isError: false,
  countProgress: 0,
  errMsg: null,

};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
        errMsg: null,
      };
    case DATA_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
        errMsg: action?.payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action?.payload,
        token: action?.payload?.token,
        userId: action?.payload?.id,
        isLoading: false,
        isSuccess: true,
        isError: false,
        errMsg: null,
      };
    case LOGOUT_SUCCESS:

      return {
        ...state,
        user: [],
        token: null,
        userId: "",
        isLoading: false,
        isSuccess: true,
        isError: false,
        errMsg: null,
      };

    default:
      return state;
  }
};
