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
  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
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
          <Typography gutterBottom>{text}</Typography>
        </DialogContent>
        <DialogActions>
          {btn.length > 0 ? (
            <>
              <Button
                autoFocus
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
