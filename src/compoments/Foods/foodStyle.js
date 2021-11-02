import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    cardItem: {
      borderRadius: "10px",
      position: "relative",
    },
    cardContent: {
      paddingLeft: "10px",
      paddingBottom: "0px",
      paddingTop: "0px",
    },
    titleText: {
      padding: "2px",
      marginBottom: "0px",
      position: "absolute",
      top: "5px",
      left: "5px",
      color: "white",
      backgroundColor: "#282A35",
      opacity: 0.7,
      borderRadius: "10px",
      maxWidth:'150px'
    },
    action: {
      paddingTop: "0px",
    },
    overlay: {
      position: "absolute",
      top: "0px",
      right: "0px",
      color: "white",
      padding: "0px",
      margin: "0px",
      backgroundColor: "#282A35",
      borderRadius: "50px",
      opacity: 0.5,
    },
    moreVertIcon: {
      padding: "0px",
      margin: "0px",
      color: "white",
      borderRadius: "50px",
    },
  }));

  export default useStyles;
  