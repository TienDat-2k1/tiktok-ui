import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

type PopperProps = {
  children: React.ReactNode;
};

const Wrapper: React.FC<PopperProps> = ({ children }) => {
  return <div className={cx('wrapper')}>{children}</div>;
};
export default Wrapper;
