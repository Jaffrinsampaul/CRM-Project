import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import { colors } from '../style/color';
import {styles} from "../style/btnStyle"

export default function DialogBox(props) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = (e) => {
    const value = e.target.id
    const deletedData = props.value
    setOpen(false);
    props.method(value, deletedData)
  };
  return (
    <div>
      <DeleteIcon onClick={handleClickOpen} style={styles.fabtnDeleteIcon}>
      </DeleteIcon>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Action Alter"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure to delete this data?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        {/* <Button variant="outlined" color="error"> */}
          <Button  variant="outlined" style={{backgroundColor:colors.darkBlue, 
            color: colors.white, borderRadius: "10px"}} id="disagree"
            autoFocus onClick={handleClose}>
            Disagree
          </Button>
          <Button style={{backgroundColor:colors.darkPink, 
            color: colors.white, borderRadius: "10px"}}  id="agree"
            onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}