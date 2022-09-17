import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from '~/components/Button/Button';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

type MenuItemProps = {
  data?: any;
  onClick: () => void;
};

const MenuItem = ({ data, onClick }: MenuItemProps) => {
  return (
    <Button
      as={Link}
      className={cx('menu-item')}
      to={data.to}
      leftIcon={data.icon}
      onClick={onClick}
    >
      {data.title}
    </Button>
  );
};
export default MenuItem;
