import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

type PopperProps = {
  children: React.ReactNode;
  className?: string;
};

const Wrapper: React.FC<PopperProps> = ({ children, className }) => {
  return <div className={cx('wrapper', className)}>{children}</div>;
};
export default Wrapper;
