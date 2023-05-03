import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';




export default function FormDialog(props) {


  return (
    <div>
      <Dialog open={props.open} onClose={props.handleClose}>
        <DialogTitle>Detailed Quote</DialogTitle>
        <DialogContent>
          <DialogContentText>
            After submitting this form, we will be sure to contact you as soon as possible.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Full Name"
            type="text"
            fullWidth
            variant="standard"
          />
                    <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
          />
                              <TextField
            autoFocus
            margin="dense"
            id="number"
            label="Phone Number"
            type="text"
            fullWidth
            variant="standard"
          />
                                        <TextField
            autoFocus
            margin="dense"
            id="school"
            label="School Name"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>Cancel</Button>
          <Button onClick={props.handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}