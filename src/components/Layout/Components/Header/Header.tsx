import './Header.scss';
import images from '~/assets/images';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="wrapper">
      <div className="inner">
        <img src={images.logo} alt="Tiktok" />
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
        <div className="actions"></div>
      </div>
    </header>
  );
};
export default Header;
