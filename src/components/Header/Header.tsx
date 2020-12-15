import React from 'react';
import { StaticQuery, graphql, Link } from "gatsby"
import './Header.css';

const Header: React.FC = () => (
  <StaticQuery
    query={graphql`
      query HeaderQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <header className="header">
        <Link to="/"><h1 className="header-title">{data.site.siteMetadata.title}</h1></Link>
      </header>
    )}
  />
)

export default Header;
