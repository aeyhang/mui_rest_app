import {
  FOOD_LIST_REQUEST,
  FOOD_LIST_SUCCESS,
  FOOD_LIST_FAIL,
} from "../constants/foodConstants.js";
import data from "../data";

export const listFoods = () => (dispatch) => {
  dispatch({
    type: FOOD_LIST_REQUEST,
  });
  try {
    const { foods } = data;
    dispatch({
      type: FOOD_LIST_SUCCESS,
      data: foods,
    });
  } catch (err) {
    dispatch({ type: FOOD_LIST_FAIL, data: err.message });
  }
};
