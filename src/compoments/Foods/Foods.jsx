import React, { useEffect } from "react";
import { Paper, Grid, Fab, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Food from "./Food";
import { useDispatch, useSelector } from "react-redux";
import { listFoods } from "./../../actions/foodActions";
import CategorySelection from "./CategorySelection";
import IngredientSelection from "./IngredientSelection";
import AddIcon from "@mui/icons-material/Add";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import { Avatar } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
    minHeight: "700px",
  },
  gridItem: {
    padding: theme.spacing(1),
  },
  select: {
    paddingBottom: theme.spacing(3),
  },
  addIcon: {
    margin: theme.spacing(3),
  },
}));
export default function Foods() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const foodList = useSelector((state) => state.foodList);
  const categoryID = useSelector((state) => state.selectedCategory);
  const ingredientID = useSelector((state) => state.selectedIngredient);
  const { loading, error, foods } = foodList;
  //Category=00 favorite foods
  //Category=000 all foods
  const foodsCat =
    categoryID === "000"
      ? foods
      : categoryID === "00"
      ? foods.filter((f) => f.isFavarite === true)
      : foods.filter((f) => f.catID === categoryID);

  const foodsFiltered =
    ingredientID === "00"
      ? foodsCat
      : foodsCat.filter((f) => f.ingredientIDs.includes(ingredientID));

  useEffect(() => {
    dispatch(listFoods());
  }, [dispatch]);

  return (
    <>
      <Paper className={classes.pageContent}>
        <Grid container align="center" className={classes.select}>
          <Grid item xs={12} md={6}>
            <CategorySelection />
          </Grid>
          <Grid item xs={12} md={6}>
            <IngredientSelection />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          {foodsFiltered.map((food) => (
            <Grid key={food._id} item md={2}>
              <Food food={food} />
            </Grid>
          ))}

          <Grid item className={classes.addIcon}>
            <Avatar
              sx={{
                height: "150px",
                width: "150px",
                bgcolor: "#3c44b1",
                fontSize: "12rem",
              }}
              onClick={() => {}}
            >
              <Button style={{color:'white'}} onClick={()=>{}}>
                <AddIcon
                  sx={{
                    fontSize: "12rem",
                  }}
                />
              </Button>
            </Avatar>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
