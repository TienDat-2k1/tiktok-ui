import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import React from 'react';

const cx = classNames.bind(styles);

type ButtonOwnProps<E extends React.ElementType> = {
  children: React.ReactNode;
  as?: E;
  type?: 'primary' | 'outline' | 'text';
  small?: boolean;
  large?: boolean;
  disabled?: boolean;
  rounded?: boolean;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
};

type ButtonProps<E extends React.ElementType> = ButtonOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof ButtonOwnProps<E>>;

const Button = <E extends React.ElementType = 'button'>({
  children,
  as,
  type,
  disabled,
  small,
  large,
  rounded,
  leftIcon,
  rightIcon,
  ...otherProps
}: ButtonProps<E>) => {
  const Component = as || 'button';

  const classes = cx('wrapper', {
    [type as string]: type,
    small,
    large,
    disabled,
    rounded,
  });

  if (disabled) {
    Object.keys(otherProps).forEach(key => {
      if (
        key.startsWith('on') &&
        typeof otherProps[key as keyof typeof otherProps] === 'function'
      ) {
        delete otherProps[key as keyof typeof otherProps];
      }
    });
  }

  return (
    <Component className={`${classes}`} {...otherProps}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Component>
  );
};
export default Button;
