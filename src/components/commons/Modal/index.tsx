import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Typography, DialogProps, Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Modal.module.scss';

const cx = classNames.bind(styles);

interface ModalProps extends Omit<DialogProps, 'onClose'> {
  open: boolean;
  title?: string;
  children?: React.ReactNode;
  onClose: () => void;
  additionalButton?: React.ReactNode;
}

function Modal({ open, title, children, onClose, additionalButton, ...dialogProps }: ModalProps) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth {...dialogProps}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {(title || !!onClose) && (
          <DialogTitle component="div" sx={{ m: 0, p: 2 }}>
            {title && <h2>{title}</h2>}
          </DialogTitle>
        )}
        <div className={cx('close-icon')} onClick={onClose}>
          <FontAwesomeIcon icon={faXmark} />
        </div>
      </Box>
      <DialogContent dividers>
        {typeof children === 'string' ? <Typography>{children}</Typography> : children}
      </DialogContent>

      {additionalButton && <DialogActions>{additionalButton}</DialogActions>}
    </Dialog>
  );
}

export default Modal;
