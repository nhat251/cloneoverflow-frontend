import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Typography, DialogProps } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

interface PopupProps extends Omit<DialogProps, 'onClose'> {
  open: boolean;
  title?: string;
  children?: React.ReactNode;
  onClose: () => void;
  additionalButton?: React.ReactNode;
}

const Popup: React.FC<PopupProps> = ({ open, title, children, onClose, additionalButton, ...dialogProps }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth {...dialogProps}>
      {(title || !!onClose) && (
        <DialogTitle sx={{ m: 0, p: 2, position: 'relative' }}>
          {title && <Typography variant="h6">{title}</Typography>}

          {/* Nút đóng (X) ở góc phải */}
          <FontAwesomeIcon icon={faXmark} onClick={onClose}/>
        </DialogTitle>
      )}

      <DialogContent dividers>
        {typeof children === 'string' ? <Typography>{children}</Typography> : children}
      </DialogContent>

      {additionalButton && <DialogActions>{additionalButton}</DialogActions>}
    </Dialog>
  );
};

export default Popup;
