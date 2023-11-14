import { Alert } from "react-native";
import { EndPoint } from "../../api/apiEndPonit";
import { GetMethod, PostMethod } from "../../api/APIMethod";
import { baseUrl } from "../../api/baseUrl";

import {
    ROUTES

} from "./types";

export const getroutes = (data, fun,) => {
    return (dispatch) => {

        GetMethod(EndPoint.ROUTES, data, dispatch, false, fun, cb => {
            console.log('cb', cb)

            dispatch({
                type: ROUTES,
                payload: cb,
            });

        })

    };
};
