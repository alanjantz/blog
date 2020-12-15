import React from 'react';
import Header from '../Header';
import './Layout.css';

const Layout: React.FC = ({ children }) => (
  <div>
    <Header />
    <main role="main">{children}</main>
  </div>
);

export default Layout;
