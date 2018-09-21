import React from 'react'
import logo from '../images/UXSocietyLogo_full.png'
import styled from 'styled-components'
import { Link } from 'gatsby'

const NavBar = styled.nav`
  display: flex;
  align-items: center;
  margin-bottom: 64px;

  a:first-child {
    margin-right: auto;
  }

  @media screen and (max-width: 700px) {
    display: none;
  }
`

const TextLink = styled(Link)`
  color: #333;
  text-decoration: none;
  margin-right: ${props => (props.margin === 'no' ? 0 : '54px')};
`
export default () => (
  <NavBar>
    <Link style={{ marginLeft: '-5px' }} to="/">
      <img src={logo} alt="" />
    </Link>
    <TextLink>About Us</TextLink>
    <TextLink to="/community/">Community</TextLink>
    <TextLink>Work</TextLink>
    <TextLink margin="no">Contact Us</TextLink>
  </NavBar>
)
