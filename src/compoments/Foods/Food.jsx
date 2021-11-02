import React, { useEffect, useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Fab,
} from "@material-ui/core";
import Controls from "../controls/Controls";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { listCategory } from "./../../actions/categoryActions";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import useStyles from "./foodStyle";
import FoodForm from "./FoodForm";

export default function Food({ food }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.categories);
  const { loading, error, categories } = categoryList;
  const category = categories.find((c) => c._id === food.catID);
  const { name } = category;

  // const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(listCategory());
  }, [dispatch]);
  // const handleOpenForm = () => {};
  // setOpen(true);
  // const handleCloseForm = () => {};
  // setOpen(false);
  return (
    <div>
      <div>
        <Card className={classes.cardItem}>
          <CardMedia
            component="img"
            height="100"
            image="./images/fried_noodle.jpg"
            alt="green iguana"
            className={classes.image}
          />
          <div className={classes.overlay}>
            <Fab size="small">
              <MoreVertIcon fontSize="default" onClick={()=>{}} />
            </Fab>
          </div>
          <CardContent className={classes.cardContent}>
            <Typography
              className={classes.titleText}
              noWrap
              gutterBottom
              variant="body2"
              component="div"
            >
              {food.name}
            </Typography>
            <Typography variant="body2" color="primary">
              {`ລາຄາ: ${food.price.toLocaleString()} ກີບ`}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              {`ປະເພດ: ${name}`}
            </Typography>
          </CardContent>
          <CardActions className={classes.action}>
            <Controls.Button fullWidth size="small" text="ກົດສັ່ງ" />
          </CardActions>
        </Card>
      </div>
      <div>
      </div>
    </div>
  );
}
