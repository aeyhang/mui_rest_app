import {
  INGREDIENT_LIST_FAIL,
  INGREDIENT_LIST_REQUEST,
  INGREDIENT_LIST_SUCCESS,
  SELECT_INGREDIENT,
} from "./../constants/ingredientConstants";

export const ingredientListReducer = (
  state = { loading: true, ingredients: [] },
  action
) => {
  switch (action.type) {
    case INGREDIENT_LIST_REQUEST:
      return { loading: true };
    case INGREDIENT_LIST_SUCCESS:
      return { loading: false, ingredients: action.data };
    case INGREDIENT_LIST_FAIL:
      return { loading: false, error: action.data };
    default:
      return state;
  }
};

const initIngredient = "00";
export const ingredientSelectionReducer = (state = initIngredient, action) => {
  const { type, data } = action;
  
  switch (type) {
    case SELECT_INGREDIENT:
      return data;
    default:
      return state;
  }
};
