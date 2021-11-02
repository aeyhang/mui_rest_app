
import { CATEGORY_LIST_REQUEST, CATEGORY_LIST_SUCCESS, CATEGORY_LIST_FAIL, SELECT_CATEGORY } from '../constants/categoryConstants';
import data from '../data';
export const listCategory=()=>(dispatch)=>{
    dispatch({
        type:CATEGORY_LIST_REQUEST
    })
    try{
        const {categories}=data;                
        dispatch({
            type:CATEGORY_LIST_SUCCESS,data:categories
        })
    }catch(err){
        dispatch({type:CATEGORY_LIST_FAIL,data:err.message})
    }
}

export const selectCategory = (value) => (dispatch) => {
    dispatch({
      type: SELECT_CATEGORY,
      data: value,
    });
  };