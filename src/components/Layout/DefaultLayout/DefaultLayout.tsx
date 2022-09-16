import classNames from 'classnames/bind';
import Header from '../Components/Header/Header';
import Sidebar from './Sidebar/Sidebar';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

type DefaultLayoutProps = {
  children: JSX.Element;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <Sidebar />
        <div className={cx('content')}>{children}</div>
      </div>
    </div>
  );
};
export default DefaultLayout;
