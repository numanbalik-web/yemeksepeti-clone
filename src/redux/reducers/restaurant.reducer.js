import AT from "../actions/action-types";

const initialState = {
  isLoading: true,
  error: null,
  restaurants: [],
};

const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case AT.REST_LOADING:
      return { ...state, isLoading: true };

    case AT.REST_ERROR:
      return { ...state, isLoading: false, error: action.payload };

    case AT.REST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        restaurants: action.payload,
      };

    default:
      return state;
  }
};

export default restaurantReducer;
