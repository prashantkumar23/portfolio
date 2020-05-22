import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Switch, Route, Link, HashRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Home from "./components/HomeComponents/Home";
import Project from "./components/ProjectComponents/Project";
import Contact from "./components/Contact/Contact";
import Grid from "@material-ui/core/Grid";

import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  header: {
    flexGrow: 1,
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default () => {
  const classes = useStyles();

  return (
    <HashRouter basename="/">
      <div>
        <Route
          path="/"
          render={() => (
            <Fragment>
              <AppBar
                position="static"
                className={classes.header}
                elevation={0}
              >
                <Toolbar variant="dense">
                  <Grid justify="space-between" container spacing={10}>
                    <Grid item>
                      <Avatar alt="devloper" src={require('./assets/programmer.svg')}/>
                    </Grid>

                    <Grid item>
                      <div>
                        <Button component={Link} to="/">
                          Home
                        </Button>
                        <Button component={Link} to="/project">
                          Project
                        </Button>
                        <Button component={Link} to="/contact">
                          Contact
                        </Button>
                      </div>
                    </Grid>
                  </Grid>
                </Toolbar>
              </AppBar>

              <Switch>
                <Route
                  exact
                  path="/"
                  render={() => (
                    <div>
                      <Home />
                    </div>
                  )}
                />
                <Route
                  exact
                  path="/project"
                  render={() => (
                    <div>
                      <Project />
                    </div>
                  )}
                />
                <Route
                  exact
                  path="/contact"
                  render={() => (
                    <div>
                      <Contact />
                    </div>
                  )}
                />
              </Switch>
            </Fragment>
          )}
        />
      </div>
    </HashRouter>
  );
};
