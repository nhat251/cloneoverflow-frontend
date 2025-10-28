import { Button as MuiButton } from '@mui/material';
import { Link } from 'react-router-dom';
import type { ReactNode, MouseEventHandler } from 'react';

interface ButtonProps {
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'error' | 'success' | 'info' | 'warning';
  variant?: 'contained' | 'outlined' | 'text';
  rounded?: boolean;
  disabled?: boolean;
  to?: string;
  href?: string;
  children?: ReactNode;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

function Button({
  to,
  href,
  color = 'primary',
  variant = 'contained',
  rounded,
  disabled,
  size,
  children,
  startIcon,
  endIcon,
  onClick,
  className,
}: ButtonProps) {
  const borderRadius = rounded ? '50px' : undefined;
  const Component = to ? Link : href ? 'a' : 'button';

  return (
    <MuiButton
      component={Component}
      to={to}
      href={href}
      color={color ?? 'primary'}
      disabled={disabled}
      variant={variant ?? 'contained'}
      size={size ?? 'medium'}
      onClick={onClick}
      startIcon={startIcon}
      endIcon={endIcon}
      className={className}
      sx={{
        borderRadius,
        textTransform: 'none',
      }}
    >
      {children}
    </MuiButton>
  );
}

export default Button;
