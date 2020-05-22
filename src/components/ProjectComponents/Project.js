import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "./ProjectDisplay";
import ProjectCategory from "./ProjectCategory";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingLeft: "0px",
    paddingRight: "0px",
    backgroundColor: "blue",
  },
  projectSummary: {
    height: "100%",
  },
  indiviualProject: {
    paddingBottom: "10px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Project() {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      spacing={3}
      style={{ width: "100%", margin: "0px" }}
    >
      <br />
      <br />
      <Grid item xs={12}>
        <Typography
          component="div"
          variant="body2"
          className={classes.projectSummary}
        >
          I blend Design, Code & Functionality <br />
          to create something awesome. <br />
          check my work below.
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Grid container>
          <ProjectCategory projectSide={"Frontend"} />
          <ProjectCategory projectSide={"Backend"} />
          <ProjectCategory projectSide={"FullStack"} />
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={3}
            className={classes.indiviualProject}
          >
            <Card />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={3}
            className={classes.indiviualProject}
          >
            <Card />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={3}
            className={classes.indiviualProject}
          >
            <Card />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={3}
            className={classes.indiviualProject}
          >
            <Card />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={3}
            className={classes.indiviualProject}
          >
            <Card />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={3}
            className={classes.indiviualProject}
          >
            <Card />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
