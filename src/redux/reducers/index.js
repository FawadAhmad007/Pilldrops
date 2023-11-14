import { combineReducers } from "redux";

//Import All Reducers
import { authReducer } from "./auth";
import { routeReducer } from "./route";

export default combineReducers({
  auth: authReducer,
  routes: routeReducer,
});
