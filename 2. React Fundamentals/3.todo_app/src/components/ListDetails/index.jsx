/* eslint-disable react/prop-types */
import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { Fragment } from "react";

export default function TodoDetails({todoDetails, openDialog, setOpenDialog, setTodoDetails}) {
  return (
   <Fragment>
        <Dialog onClose={()=> setOpenDialog(false)} open={openDialog}>
            <DialogTitle>{todoDetails?.todo}</DialogTitle>
            <DialogActions>
                <Button
                onClick={()=> {setOpenDialog(false);  setTodoDetails(false)}}>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
   </Fragment>
  )
}
