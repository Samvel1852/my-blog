import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar({ logged }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            <Button color="inherit">Blog</Button>
          </Link>
          <Button color="inherit">Create a Post</Button>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>

          <Link style={{ textDecoration: "none", color: "white" }} to="/login">
            {logged ? (
              <Button color="inherit">Log out</Button>
            ) : (
              <Button color="inherit">Log in</Button>
            )}
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
