import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from 'styled-components';
import logo from '../images/gatsby-icon.png';

const HeaderWrapper = styled.div`
    background: blue;
    img {
        margin-bottom: 0;
        width: 100px;
    }
`;

const HeaderContainer = styled.div`
    margin: 0 auto;
    max-width: 960;
    padding: 1rem;
`;

const H1Wrapper = styled.h1`
    margin: 0;
`;





const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1>
      <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
        <img
            src={logo}
            alt="Level Up Tutorials Logo"
          />
        </Link>
      </h1>
    </HeaderContainer>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
