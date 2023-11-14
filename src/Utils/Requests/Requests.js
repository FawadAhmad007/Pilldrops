import { postConfig, publicResponseHandler } from "./NetworkConfig";
//import { store } from "../Redux/store/Store";
import * as CONSTANTS from "../Constants/ApiConstants";

//const token = store.getState()?.root?.auth?.token;

export const login = async (data) => {
  const config = postConfig(
    data,
    CONSTANTS?.BASE_URL + CONSTANTS?.END_POINT?.LOGIN
  );

  return await publicResponseHandler(config);
};
