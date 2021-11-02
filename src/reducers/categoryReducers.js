import {
    CATEGORY_LIST_FAIL,
    CATEGORY_LIST_REQUEST,
    CATEGORY_LIST_SUCCESS,
    SELECT_CATEGORY,
  } from "./../constants/categoryConstants";
  
  export const categoriesReducer = (
    state = { loading: true, categories: [] },
    action
  ) => {
    switch (action.type) {
      case CATEGORY_LIST_REQUEST:
        return { loading: true };
      case CATEGORY_LIST_SUCCESS:
        return { loading: false, categories: action.data };
      case CATEGORY_LIST_FAIL:
        return { loading: false, error: action.data };
      default:
        return state;
    }
  };
  
  
const initCategory = "00";
export const categorySelectionReducer = (state = initCategory, action) => {
  const { type, data } = action;
  
  switch (type) {
    case SELECT_CATEGORY:
      return data;
    default:
      return state;
  }
};