import {
    ROUTES

} from "../actions/types";
const initialState = {

    routes: [],

};

export const routeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ROUTES:
            return {
                ...state,
                routes: action.payload
            };

        default:
            return state;
    }
};
