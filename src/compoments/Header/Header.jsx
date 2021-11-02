import React from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  InputBase,
  IconButton,
  Badge,
} from "@material-ui/core";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import SearchIcon from "@mui/icons-material/Search";

import useStyles from "./style";

export default function Header() {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item>
            <InputBase
              className={classes.searchInput}
              placeholder="search topics"
              startAdornment={<SearchIcon fontSize="small" />}
            />
          </Grid>
          <Grid item sm>
          </Grid>
          <Grid item>
            <IconButton>
              <Badge badgeContent={4} color="secondary">
                <NotificationsNoneIcon fontSize="small" />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={3} color="primary">
                <ChatBubbleOutlineIcon fontSize="small" />
              </Badge>
            </IconButton>
            <IconButton>
              <PowerSettingsNewIcon fontSize="small" />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
