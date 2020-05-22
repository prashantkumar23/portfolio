import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Skill from "./Skill";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingLeft: "100px",
    paddingRight: "100px",
    height: "100%",
  },
  avatarConatiner: {
    margin: "auto",
    width: "300px",
    height: "300px",
  },
  avatarPaper: {
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    webkitBoxShadow: "0px 0px 10px -3px rgba(0,0,0,0.71)",
    mozBoxShadow: "0px 0px 10px -3px rgba(0,0,0,0.71)",
    boxShadow: "0px 0px 10px -3px rgba(0,0,0,0.71)",
  },
  chipContainer: {
    textAlign: "flex",
  },
  paper: {
    textAlign: "center",
    color: theme.palette.text.primary,
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      spacing={3}
      style={{ paddingTop: "20px" }}
    >
      <Grid
        item
        xs={12}
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "50px",
          width: "100%",
        }}
      >
        <Paper className={classes.avatarPaper} variant="outlined">
          <Avatar
            src={require("../../assets/profileImage.jpg")}
            className={classes.avatarConatiner}
          />
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Typography
            variant="body2"
            style={{
              paddingBottom: "10px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Hey Im Cool Full Stack Developer
          </Typography>
          <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
            <Typography
              variant="subtitle2"
              style={{ display: "flex", justifyContent: "center" }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.type specimen
              book.simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.type specimen book.
            </Typography>
          </div>
        </Paper>
      </Grid>

      <Grid item xs={12} style={{ display: "flex", justifyContent: "center" }}>
        <Skill />
      </Grid>
    </Grid>
  );
}
