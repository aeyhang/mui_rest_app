import React from "react";
import { Button as MuiButton, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0),
    borderRadius:'10px'
  },
  label: {
    textTransform: "none",
  },  
}));

export default function Button({
  text,
  size,
  variant,
  color,
  onClick,
  ...other
}) {
  const classes = useStyles();
  return (
    <MuiButton
      classes={{ root: classes.root, label: classes.label }}
      variant={variant || "contained"}
      size={size || "medium"}
      color={color || "primary"}
      onClick={onClick}
      {...other}
    >
      {text}
    </MuiButton>
  );
}
