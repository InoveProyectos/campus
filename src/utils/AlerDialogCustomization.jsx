import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs({
  open,
  handleClose,
  text,
  title,
  btn,
}) {
  const btn_style = {
    fontFamily:'AvertaStd-Semibold',
    border : '0px',
    borderRadius : '15px', 
    background : 'linear-gradient(38deg, #00B1B9 1.57%, #0097EC 98.56%)'
  } 
  return (
    <div>
      <BootstrapDialog
        sx={{background : 'radial-gradient(circle, #5d5f6f, #4a4651, #352f35, #1f1b1d, #000000)' }}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2, fontFamily:'AvertaStd-Regular' }} id="customized-dialog-title">
          {title}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography sx={{fontFamily:'AvertaStd-Regular'}} gutterBottom>{text}</Typography>
        </DialogContent>
        <DialogActions>
          {btn.length > 0 ? (
            <>
              <Button
                autoFocus
                sx={btn_style}
                onClick={() => {
                  handleClose();
                  btn[0].url != null ? window.open(btn[0].url, "_blank"): null;
                  
                }}
              >
                {btn[0].text}
              </Button>
              {btn.length === 2 && (
                <Button
                  autoFocus
                  sx={btn_style}
                  onClick={() => {
                    handleClose();
                    btn[1].url != null ? window.open(btn[1].url, "_blank"): null;
                  }}
                >
                  {btn[1].text}
                </Button>
              )}
            </>
          ) : null}
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
