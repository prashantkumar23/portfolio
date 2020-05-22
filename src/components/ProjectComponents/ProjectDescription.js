import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function ProjectDescription() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button size="small" color="secondary" onClick={handleClickOpen}>
        Description
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle variant="h3" id="alert-dialog-slide-title">
          Project Title
        </DialogTitle>
        <DialogContent>
          <DialogContentText variant="h2" id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
            Let Google help apps determine location. This means sending
            anonymous location data to Google even when no apps are running Let
            Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running. Let Google
            help apps determine location. This means sending anonymous location
            data to Google, even when no apps are running. Let Google help apps
            determine location. This means sending anonymous location data to
            Google, even when no apps are running. Let Google help apps
            determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" label="hey">
            Got it
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
