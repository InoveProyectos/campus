import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

function CustomSnackbar(props) {
  const { open, onClose, message, severity, duration } = props;

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={open}
      autoHideDuration={duration}
      onClose={onClose}
    >
      <Alert
        onClose={onClose}
        severity={severity}
        style={{
          fontWeight: "bold",
          width: "400px",
          fontSize: "20px",
          opacity: "1",
          background: "white",
          color: "green",
        }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}

export default CustomSnackbar;
