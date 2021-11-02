import {
    FOOD_LIST_FAIL,
    FOOD_LIST_REQUEST,
    FOOD_LIST_SUCCESS,
  } from "./../constants/foodConstants";
  
  export const foodListReducer = (
    state = { loading: true, foods: [] },
    action
  ) => {
    switch (action.type) {
      case FOOD_LIST_REQUEST:
        return { loading: true };
      case FOOD_LIST_SUCCESS:
        return { loading: false, foods: action.data };
      case FOOD_LIST_FAIL:
        return { loading: false, error: action.data };
      default:
        return state;
    }
  };
  