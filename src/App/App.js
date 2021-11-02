import "./App.css";
import { useStyles,theme } from "./style.js";
import { CssBaseline,   } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import  "@fontsource/noto-sans-lao";

import Header from "../compoments/Header/Header";
import SideMenu from "../compoments/SideMenu/SideMenu";
import Foods from '../compoments/Foods/Foods'
// import noto from "../fonts/noto.woff2";



function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
    <div >
    <CssBaseline />
        <div className={classes.container}>
          <SideMenu />
        </div>
        <div className={classes.appMain}>
          {/* <Header /> */}
          <Foods/>
        </div>
      </div>
    </ThemeProvider> 
  );
}

export default App;
