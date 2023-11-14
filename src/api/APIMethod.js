
import AsyncStorage from "@react-native-async-storage/async-storage";
import { logoutUser } from "../redux";
import { DATA_FAILED, } from "../redux/actions/types";
import { baseUrl } from "./baseUrl";

export const PostMethod = async (endPoint, data, dispatch, type, fun, cb) => {
  const root = await AsyncStorage.getItem("persist:root");

  const parasRoot = JSON.parse(root)
  let res

  await baseUrl
    .post(endPoint, data)
    .then(async (ress) => {
      console.log("res?.data?.success", ress)

      res = ress
    })
    .catch((err) => {
      console.log("res?.data?.err", err, endPoint)
      cb([])

      dispatch({
        type: DATA_FAILED,
      });
    });
  if (res) {
    try {
      console.log("res?.data?.success", res?.data, endPoint)

      let data = res?.data

      cb(data)

    } catch {
      cb([])
      console.log("my side error")
      dispatch({
        type: DATA_FAILED,
      });
    }
  }
};

export const GetMethod = async (endPoint, data, dispatch, type, fun, cb) => {
  const root = await AsyncStorage.getItem("persist:root");

  const parasRoot = JSON.parse(root)
  let res

  await baseUrl
    .get(endPoint, data)
    .then(async (ress) => {
      console.log("res?.data?.success", ress)

      res = ress
    })
    .catch((err) => {
      console.log("res?.data?.err", err, endPoint)
      cb([])

      dispatch({
        type: DATA_FAILED,
      });
    });
  if (res) {
    try {
      console.log("res?.data?.success", res?.data, endPoint)

      let data = res?.data

      cb(data)

    } catch {
      cb([])
      console.log("my side error")
      dispatch({
        type: DATA_FAILED,
      });
    }
  }
};