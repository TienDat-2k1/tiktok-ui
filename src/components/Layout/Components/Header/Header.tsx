import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
  faEllipsisVertical,
  faEarthAsia,
  faCircleQuestion,
  faKeyboard,
} from '@fortawesome/free-solid-svg-icons';

import { Wrapper as ProperWrapper } from '~/components/Popper';
import './Header.scss';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem/AccountItem';
import Button from '~/components/Button/Button';
import Menu from '~/components/Popper/Menu/Menu';

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard shortcut',
  },
];

const Header = () => {
  const [searchResult, setSearchResult] = useState<number[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 3000);
  }, []);

  return (
    <header className="wrapper">
      <div className="inner">
        <img src={images.logo} alt="Tiktok" />
        <Tippy
          interactive
          visible={searchResult.length > 0}
          render={attrs => (
            <div className="search-result" tabIndex={-1} {...attrs}>
              <ProperWrapper>
                <h4 className="search-title">Accounts</h4>

                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </ProperWrapper>
            </div>
          )}
        >
          <div className="search">
            <input
              type="text"
              placeholder="Search accounts and videos"
              spellCheck={false}
            />
            <button className="search-clear">
              {
                //@ts-ignore
                <FontAwesomeIcon icon={faCircleXmark} />
              }
            </button>
            {/* Loading */}
            {
              //@ts-ignore
              <FontAwesomeIcon className="loading" icon={faSpinner} />
            }

            <button className="search-btn">
              {
                //@ts-ignore
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              }
            </button>
          </div>
        </Tippy>

        <div className="actions">
          <Button type="text">upload</Button>
          <Button type="primary">Login</Button>
          <Menu items={MENU_ITEMS}>
            <Button className="more-btn">
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </Button>
          </Menu>
        </div>
      </div>
    </header>
  );
};
export default Header;
