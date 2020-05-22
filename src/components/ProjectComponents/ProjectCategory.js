import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
  background: {
    backgroundColor: "#ffffff",
  },
}));

export default function ProjectCategory(props) {
  const classes = useStyles();
  const { projectSide } = props;

  return (
    <div className={classes.root}>
      <Chip
        variant="outlined"
        color="secondary"
        className={classes.background}
        onClick={() => alert("Clicked!!")}
        label={<Typography variant="caption">{projectSide}</Typography>}
      />
    </div>
  );
}
