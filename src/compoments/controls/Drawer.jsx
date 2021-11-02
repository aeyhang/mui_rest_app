import React from "react";
import {
  Drawer as MuiDrawer,
  ListItem,
  ListItemIcon,
  ListItemText,
  List,
  makeStyles,
  Container,
} from "@material-ui/core";

const drawerWidth = 320;

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.primary,
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: { width: drawerWidth, backgroundColor: "#333996" },
  textColor: { color: "white" },
}));

export default function Drawer({menuItems}) {
  const classes = useStyles();
  return (
    <MuiDrawer
      variant="permanent"
      className={classes.drawer}
      classes={{ paper: classes.drawerPaper }}
    >
      <Container>
        <List>
          {menuItems.map((item) => {
            const {_id, text, icon } = item;
            return (
              
                <ListItem button key={_id} >
                  <ListItemIcon className={classes.textColor}>{icon}</ListItemIcon>
                  <ListItemText primary={text} className={classes.textColor} />
                </ListItem>
              
            );
          })}
        </List>
      </Container>
    </MuiDrawer>
  );
}
