import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './LoginPopup.module.scss';
import { Button, TextField, Stack } from '@mui/material';
import Popup from '~/components/commons/Popup';

const cx = classNames.bind(styles);

interface LoginPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin?: (username: string, password: string) => void;
}

const LoginPopup: React.FC<LoginPopupProps> = ({ isOpen, onClose, onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (onLogin) {
      onLogin(username, password);
    } else {
      console.log('Login with:', { username, password });
    }
    onClose();
  };

  return (
    <Popup
      open={isOpen}
      onClose={onClose}
      title="Login"
      additionalButton={
        <Button
          variant="contained"
          color="primary"
          onClick={handleLogin}
          className={cx('login-btn')}
        >
          Login
        </Button>
      }
    >
      <Stack spacing={2} sx={{ mt: 1 }}>
        <TextField
          label="Username"
          variant="outlined"
          size="small"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          variant="outlined"
          size="small"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Stack>
    </Popup>
  );
};

export default LoginPopup;
