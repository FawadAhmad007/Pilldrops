import { ALLROUTES, ROUTES } from "../actions/types";
const initialState = {
  allRoutes: [],
  routes: [],
};

export const routeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALLROUTES:
      return {
        ...state,
        allRoutes: action.payload,
      };
    case ROUTES:
      return {
        ...state,
        routes: action.payload,
      };

    default:
      return state;
  }
};
