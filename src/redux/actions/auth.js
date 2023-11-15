import axios from "axios";
import { EndPoint } from "../../api/apiEndPonit";
import { PostMethod } from "../../api/APIMethod";
import { DATA_LOADING, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../actions/types";
import { getCurrency, getPaymentList } from "./cart";
import { getroutes } from "./route";

export const loginUser = (data) => {
  return (dispatch) => {
    dispatch({
      type: DATA_LOADING,
    });

    PostMethod(EndPoint.LOGIN, data, dispatch, false, "fun", (cb) => {
      // let data = {
      //   "token": cb?.user?.token_app,
      //   "user_id": cb?.user?.id,
      //   "restaurant_id": cb?.user.restaurant_id,
      // }
      //  console.log("cb?.user", cb)
      dispatch({
        type: LOGIN_SUCCESS,
        payload: cb,
      });

      // dispatch(getroutes({}));
    });
  };
};

export const logoutUser = (data) => {
  return (dispatch) => {
    console.log("loggout");
    dispatch(getroutes({}));
    // dispatch({
    //   type: LOGOUT_SUCCESS,
    // });
  };
};
