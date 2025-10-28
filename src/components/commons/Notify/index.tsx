import React from "react";
import { Alert, AlertTitle, Snackbar } from "@mui/material";

type NotifyType = "success" | "warning" | "error" | "info";

interface NotifyProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  message: string;
  type?: NotifyType;
  duration?: number;
}

const Notify = ({
  open,
  onClose,
  title,
  message,
  type = "info",
  duration = 4000,
} : NotifyProps) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={duration}
      onClose={onClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert
        onClose={onClose}
        severity={type}
        variant="filled"
        sx={{ width: "100%", borderRadius: 2 }}
      >
        {title && <AlertTitle>{title}</AlertTitle>}
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Notify;
