import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './LoginModal.module.scss';
import { TextField, Stack } from '@mui/material';
import Modal from '~/components/commons/Modal';
import callApi from '~/components/api/axiosConfig';
import { LOGIN } from '~/constants/api';
import Button from '~/components/commons/Button';

const cx = classNames.bind(styles);

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  // onLogin?: (username: string, password: string) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const data = {
      username: username,
      password: password,
    };
    const response = await callApi({ path: LOGIN, method: 'POST', data: data });
    console.log(response);
    
    onClose();
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      title="Login"
      additionalButton={
        <Button primary onClick={handleLogin} className={cx('login-btn')}>
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
    </Modal>
  );
};

export default LoginModal;
