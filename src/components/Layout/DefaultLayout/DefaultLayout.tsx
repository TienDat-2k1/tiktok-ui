import Header from '../Components/Header/Header';
import Sidebar from './Sidebar/Sidebar';

type DefaultLayoutProps = {
  children: JSX.Element;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div>
      <Header />
      <div className="container">
        <Sidebar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
};
export default DefaultLayout;
