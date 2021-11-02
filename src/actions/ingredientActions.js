import {
  INGREDIENT_LIST_REQUEST,
  INGREDIENT_LIST_SUCCESS,
  INGREDIENT_LIST_FAIL,
  SELECT_INGREDIENT,
} from "../constants/ingredientConstants.js";
import data from "../data";

export const listIngredients = () => (dispatch) => {
  dispatch({
    type: INGREDIENT_LIST_REQUEST,
  });
  try {
    const { ingredients } = data;
    dispatch({
      type: INGREDIENT_LIST_SUCCESS,
      data: ingredients,
    });
  } catch (err) {
    dispatch({ type: INGREDIENT_LIST_FAIL, data: err.message });
  }
};

export const selectIngredient = (value) => (dispatch) => {
  dispatch({
    type: SELECT_INGREDIENT,
    data: value,
  });
};
