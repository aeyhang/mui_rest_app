import React from "react";
import useStyles from "./styles";
import Controls from "../controls/Controls";
import FastfoodIcon from "@mui/icons-material/Fastfood";


const menuItems = [
  { _id:'01',text: "ຫນ້າຫລັກ", icon: <FastfoodIcon /> ,to:'/'},
  { _id:'02',text: "ຂາຍສິນຄ້າ", icon: <FastfoodIcon /> },
  { _id:'03',text: "Send email", icon: <FastfoodIcon /> },
  { _id:'04',text: "Drafts", icon: <FastfoodIcon /> },
];

export default function SideMenu() {
  const classes = useStyles();
  return (
    <div className={classes.sideMenu}>
      <Controls.Drawer menuItems={menuItems}/>
    </div>
  );
}
