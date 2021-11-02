import {makeStyles,createTheme} from '@material-ui/core/styles'
import  "@fontsource/noto-sans-lao";

export const useStyles = makeStyles({
  appMain: {
    paddingLeft: "320px",
    width: "100%",
  },
  container: {
    display: "flex",
  },
});

export const theme = createTheme({
  palette: {
    primary: {
      main: "#333996",
      light: "#3c44b1",
    },
    secondary: {
      main: "#f83245",
      light: "#f8324526",
    },
    background: {
      default: "#f4f5fd",
    },
  },
  shape: {
    borderRadius: "20px",
  },
  typography: {
    fontFamily: "Noto Sans Lao",
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  button:{
    primary:"#333996",
  }
  
});