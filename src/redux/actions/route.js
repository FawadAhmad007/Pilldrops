import { Alert } from "react-native";
import { EndPoint } from "../../api/apiEndPonit";
import { GetMethod, PatchMethod, PostMethod } from "../../api/APIMethod";
import { baseUrl } from "../../api/baseUrl";

import { ALLROUTES, ROUTES } from "./types";

export const getAllRoutes = (data, key) => {
  return (dispatch) => {
    GetMethod(EndPoint.ALLROUTES, data, dispatch, false, key, (cb) => {
      console.log("cb", cb);

      dispatch({
        type: ALLROUTES,
        payload: cb.data,
      });
    });
  };
};

export const getRoutes = (data, key) => {
  return (dispatch) => {
    GetMethod(EndPoint.ROUTES, data, dispatch, false, key, (cb) => {
      console.log("cb", cb);

      dispatch({
        type: ROUTES,
        payload: cb,
      });
    });
  };
};

export const updateStatus = (data, key) => {
  return (dispatch) => {
    PatchMethod(EndPoint.UPDATE_STATUS, data, dispatch, false, key, (cb) => {
      console.log("cb", cb);

      dispatch({
        type: ROUTES,
        payload: cb,
      });
    });
  };
};
