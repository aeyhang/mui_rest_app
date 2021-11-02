import {
  TABLE_LIST_FAIL,
  TABLE_LIST_REQUEST,
  TABLE_LIST_SUCCESS,
} from "./../constants/tableConstants";

export const tableListReducer = (
  state = { loading: true, tables: [] },
  action
) => {
  switch (action.type) {
    case TABLE_LIST_REQUEST:
      return { loading: true };
    case TABLE_LIST_SUCCESS:
      return { loading: false, tables: action.data };
    case TABLE_LIST_FAIL:
      return { loading: false, error: action.data };
    default:
      return state;
  }
};
