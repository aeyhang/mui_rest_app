import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  FormControl,
  InputLabel,
  Select as MuiSelect,
  MenuItem,
  FormHelperText,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    // margin: theme.spacing(1),
    maxWidth: "450px",
  },
  align: {
    textAlign: "center",
  },
}));

export default function Select({
  name,
  label,
  value,
  error = null,
  onChange,
  options,
}) {
  const classes = useStyles();  
  return (
    <FormControl
      fullWidth
      className={classes.formControl}
      variant="outlined"
      {...(error && { error: true })}
    >
      <InputLabel>{label}</InputLabel>
      <MuiSelect
        className={classes.align}
        label={label}
        name={name}
        value={value}
        onChange={onChange}
      >
        {options.map((item) => (
          <MenuItem key={item._id} value={item._id}>
            <Typography color="primary" variant='h6' >{item.name}</Typography>
          </MenuItem>
        ))}
      </MuiSelect>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
}
