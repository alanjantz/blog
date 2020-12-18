import React from 'react';
import TopMenu from '../TopMenu';
import Container from '../Container';
import Helmet from 'react-helmet';
import config from '../../../data/config';
import './Layout.css';

const Layout: React.FC = ({ children }) => (
  <div>
    <Helmet>
      <meta name="description" content={config.siteDescription} />
    </Helmet>
    <TopMenu />
    <main role="main">
      <Container>
        {children}
      </Container>
    </main>
  </div>
);

export default Layout;
