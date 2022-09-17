import React, { useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as ProperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Header from './Header';

const cx = classNames.bind(styles);

type MenuProps = {
  children?: any;
  items?: any;
  onChange: (item: any) => void;
};

const Menu = ({ children, items, onChange }: MenuProps) => {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];

  const renderItems = (): React.ReactNode => {
    return current.data?.map((item: any, index: number) => {
      const isParent = !items.children;
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev: any) => [...prev, item.children]);
            } else {
              // onChange(item);
            }
          }}
        />
      );
    });
  };

  const onBackHandler = () => {
    setHistory(prev => prev.slice(0, prev.length - 1));
  };

  return (
    <Tippy
      visible
      interactive
      delay={[0, 700]}
      placement="bottom-end"
      render={attrs => (
        <div className={cx('menu-list')} tabIndex={-1} {...attrs}>
          <ProperWrapper className={cx('menu-popper')}>
            {history.length > 1 && (
              <Header title="Language" onBack={onBackHandler}></Header>
            )}
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
