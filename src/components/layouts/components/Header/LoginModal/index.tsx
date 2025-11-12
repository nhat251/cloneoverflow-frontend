import { useState } from 'react';
import classNames from 'classnames/bind';
import { TextField, Stack } from '@mui/material';

import styles from './LoginModal.module.scss';
import Modal from '~/components/commons/Modal';
import Button from '~/components/commons/Button';
import { useAuth } from '~/hooks';

const cx = classNames.bind(styles);

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  // onLogin?: (username: string, password: string) => void;
}

function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const { login: handleLogin } = useAuth();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleLoginBtn = async () => {
    const message = await handleLogin(username, password);

    if (message !== 'Invalid username or password') {
      setErrorMessage(null);
      onClose();
    } else {
      setErrorMessage(message);
    }
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      title="Login"
      additionalButton={
        <Button primary onClick={handleLoginBtn} className={cx('login-btn')}>
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
      <p className={cx('error-message')}>{errorMessage}</p>
    </Modal>
  );
}

export default LoginModal;
