import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link, NavLink } from 'react-router-dom';
import React from 'react';

const cx = classNames.bind(styles);

// 🧩 Định nghĩa kiểu cho props
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  to?: string;
  href?: string;
  primary?: boolean;
  outline?: boolean;
  text?: boolean;
  rounded?: boolean;
  disable?: boolean;
  small?: boolean;
  large?: boolean;
  children?: React.ReactNode;
  className?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

// 🧩 Component Button
const Button: React.FC<ButtonProps> = ({
  to,
  href,
  primary = false,
  outline = false,
  text = false,
  rounded = false,
  disable = false,
  small = false,
  large = false,
  children,
  className,
  leftIcon,
  rightIcon,
  onClick,
  ...passProps
}) => {
  let Comp: React.ElementType = 'button';

  const props: Record<string, any> = {
    onClick,
    ...passProps,
  };

  if (disable) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  }

  // 🔗 Link hoặc <a>
  if (to) {
    props.to = to;
    Comp = NavLink;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }

  // 🎨 Áp dụng className
  const classes = cx('wrapper', {
    [className ?? '']: !!className,
    primary,
    outline,
    small,
    large,
    text,
    disable,
    rounded,
  });

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
  );
};

export default Button;
