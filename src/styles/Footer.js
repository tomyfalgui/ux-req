import React from 'react'
import styled from 'styled-components'
import logo from '../images/UXSocietyLogo_full.png'

const Footer = styled.footer`
  padding-left: 168px;
  padding-right: 168px;
  padding-bottom: 100px;
`

const Nav = styled.nav`
  display: flex;
  align-items: flex-start;
  margin-bottom: 100px;
`

const Image = styled.img`
  margin-right: auto;
`

const SubNav = styled.div`
  margin-right: ${props => (props.margin === 'no' ? 0 : '112px')};
  h3 {
    font-weight: bold;
  }
`

const SubFooter = styled.footer`
  color: #97a2ad;
`

export default () => (
  <Footer>
    <Nav>
      <Image src={logo} alt="" />
      <SubNav>
        <h3>About Us</h3>
        <ul>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
        </ul>
      </SubNav>
      <SubNav>
        <h3>Community</h3>
        <ul>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
        </ul>
      </SubNav>
      <SubNav>
        <h3>Work</h3>
        <ul>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
        </ul>
      </SubNav>
      <SubNav margin="no">
        <h3>Contact</h3>
        <ul>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
        </ul>
      </SubNav>
    </Nav>
    <SubFooter>
      <p>Passionately made by User Experience Society</p>
    </SubFooter>
  </Footer>
)