import React, { useState } from "react";
import Controls from "../controls/Controls";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { listCategory, selectCategory } from "./../../actions/categoryActions";

export default function CategorySelection() {
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.categories);
  const categoryID = useSelector((state) => state.selectedCategory);
  const { loading, error, categories } = categoryList;
  const favariteCat = [
    {
      _id: "00",
      name: "ປັກໝຸດ",
    },
    {
      _id: "000",
      name: "ທັງໝົດ",
    },
  ];
  const newCategories = [...favariteCat, ...categories];
  const [category, setCategory] = useState(categoryID);

  useEffect(() => {
    dispatch(listCategory());
  }, [dispatch]);

  const handleSelectChange = (e) => {
    const { value } = e.target;
    setCategory(value);
    dispatch(selectCategory(value));
  };
  return (
    <Controls.Select
      name="categoryID"
      label="ປະເພດອາຫານ"
      value={categoryID}
      onChange={handleSelectChange}
      options={newCategories}
      error=""
    />
  );
}
