import base64 from "react-native-base64";
import Axios from "axios";
export const postConfig = (data, url) => {
  return {
    method: "POST",
    data,
    url,
    headers: {
      "Content-Type": "application/json",
    },
  };
};

export const getConfig = (data, url) => {
  return {
    method: "GET",
    data,
    url,
    headers: {
      "Content-Type": "application/json",
    },
  };
};

export const publicResponseHandler = async (config) => {
  return await Axios(config);
};
