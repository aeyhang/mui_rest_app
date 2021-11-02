import {
  TABLE_LIST_REQUEST,
  TABLE_LIST_SUCCESS,
  TABLE_LIST_FAIL,
} from "../constants/tableConstants";
import data from "../data";
import axios from "axios";

export const listTables = () => async (dispatch) => {
  dispatch({
    type: TABLE_LIST_REQUEST,
  });
  try {
    const { tables } = data;
    const  tableList = await axios.get("/api/tables");
    console.log(tableList.data);

    dispatch({
      type: TABLE_LIST_SUCCESS,
      data: tableList.data,
    });
  } catch (err) {
    dispatch({ type: TABLE_LIST_FAIL, data: err.message });
  }
};
