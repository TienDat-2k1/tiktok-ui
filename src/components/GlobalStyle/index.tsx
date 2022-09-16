import React from 'react';
import './GlobalStyle.scss';

type Props = {
  children: JSX.Element;
};

const GlobalStyles: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};
export default GlobalStyles;
