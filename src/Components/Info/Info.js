import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Information/Usage
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"How to use it?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Input tasks and click Add to add task to the todo list.
            Click checkbox to mark the task done, click dustbin icon to remove,
            click the task letter to mark it as important one.
            <br/>
            Online switch means all data will be sent to firebase.
            Offline Mode will guarantee all of your data will be stored at localStorage.
            When switching from online to offline,it will store all to localStorage.
            When switching from offline to online, it will erease current firebase data, and turn into online mode.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.restoreHandler} disabled={!props.restoreFlag} color="primary">
            Restore PrevOnlineData
          </Button>
          <Button onClick={handleClose} color="primary">
            Discord
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}