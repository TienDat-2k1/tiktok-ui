import Header from '../Components/Header/Header';

type HeaderOnlyProps = {
  children: JSX.Element;
};

const HeaderOnly: React.FC<HeaderOnlyProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="container">{children}</div>
    </div>
  );
};
export default HeaderOnly;
