import { combineReducers } from "redux";
import { tableListReducer } from './tableReducers';
import { categoriesReducer,categorySelectionReducer } from './categoryReducers';
import { foodListReducer } from "./foodReducers";
import { ingredientListReducer, ingredientSelectionReducer } from './ingredientReducers';
export const reducers = combineReducers({
    tableList:tableListReducer,
    categories:categoriesReducer,
    foodList:foodListReducer,
    ingredientList:ingredientListReducer,
    selectedIngredient:ingredientSelectionReducer,
    selectedCategory:categorySelectionReducer
})