import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Dialog from "./ProjectDescription";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 345,
    webkitBoxShadow: "0px 0px 10px -3px rgba(0,0,0,0.71)",
    mozBoxShadow: "0px 0px 10px -3px rgba(0,0,0,0.71)",
    boxShadow: "0px 0px 10px -3px rgba(0,0,0,0.71)",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  projectTitle: {
    height: "20px",
  },
  paper: {
    maxWidth: 400,
  },
}));

export default function ProjectDisplayCard() {
  const classes = useStyles();

  return (
    <Paper
      className={classes.root}
      variant="outlined"
      style={{ background: "#FBFCFC" }}
    >
      <CardMedia
        className={classes.media}
        image="https://4cawmi2va33i3w6dek1d7y1m-wpengine.netdna-ssl.com/wp-content/uploads/2018/08/Fundamentals-of-JavaScript_portfolio-440x320.png"
        title="Project Image"
        style={{ paddingLeft: "0px" }}
      />
      <CardContent style={{ paddingLeft: "6px", paddingBottom: "0px" }}>
        <Typography variant="h3" color="textSecondary" component="p">
          Project Title
        </Typography>
      </CardContent>
      <CardActions justify="space-between">
        <React.Fragment>
          <Button size="small" color="secondary">
            Watch Live
          </Button>
          <Dialog />
        </React.Fragment>
      </CardActions>
    </Paper>
  );
}
