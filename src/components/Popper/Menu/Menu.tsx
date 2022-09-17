import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as ProperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

type MenuProps = {
  children?: any;
  items?: any;
};

const Menu = ({ children, items }: MenuProps) => {
  const renderItems = (): React.ReactNode => {
    return items?.map((item: any, index: number) => (
      <MenuItem key={index} data={item} />
    ));
  };

  return (
    <Tippy
      interactive
      delay={[0, 700]}
      placement="bottom-end"
      render={attrs => (
        <div className={cx('menu-list')} tabIndex={-1} {...attrs}>
          <ProperWrapper className={cx('menu-popper')}>
            {renderItems()}
          </ProperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
};
export default Menu;
