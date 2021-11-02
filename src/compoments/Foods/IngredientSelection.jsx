import React, { useState } from "react";
import Controls from "../controls/Controls";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  listIngredients,
  selectIngredient,
} from "./../../actions/ingredientActions";

export default function IngredientSelection() {
  const dispatch = useDispatch();
  const ingredientList = useSelector((state) => state.ingredientList);
  const ingredientID = useSelector((state) => state.selectedIngredient);
  const { loading, error, ingredients } = ingredientList;
  const favariteCat = {
    _id: "00",
    name: "ທັງຫມົດ",
  };
  const newIngredients = [favariteCat, ...ingredients];
  const [ingredient, setIngredient] = useState(ingredientID);

  useEffect(() => {
    dispatch(listIngredients());
  }, [dispatch]);

  const handleSelectChange = (e) => {
    const { value } = e.target;
    setIngredient(value);
    dispatch(selectIngredient(value));
  };
  return (
    <Controls.Select
      name="ingredientID"
      label="ວັດຖຸດິບ"
      value={ingredientID}
      onChange={handleSelectChange}
      options={newIngredients}
      error=""
    />
  );
}
