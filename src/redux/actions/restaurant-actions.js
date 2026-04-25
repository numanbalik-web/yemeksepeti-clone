import api from "../../utils/api";
import AT from "./action-types";

export const getRestaurants = () => (dispatch) => {
  dispatch({ type: AT.REST_LOADING });

  api
    .get("/restaurants")

    .then((res) => dispatch({ type: AT.REST_SUCCESS, payload: res.data }))

    .catch((err) => dispatch({ type: AT.REST_ERROR, payload: err.message }));
};
