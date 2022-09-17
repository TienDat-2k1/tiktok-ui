import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import React from 'react';

const cx = classNames.bind(styles);

type ButtonOwnProps<E extends React.ElementType> = {
  children: React.ReactNode;
  as?: E;
  className?: string;
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

const Button = <E extends React.ElementType = 'button'>(
  {
    children,
    as,
    className,
    type,
    disabled,
    small,
    large,
    rounded,
    leftIcon,
    rightIcon,
    ...otherProps
  }: ButtonProps<E>,
  ref: any
) => {
  const Component = as || 'button';

  const classes = cx('wrapper', {
    [type as string]: type,
    [className as string]: className,
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
    <Component className={`${classes}`} {...otherProps} ref={ref}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Component>
  );
};
export default React.forwardRef(Button);
