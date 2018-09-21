import React from 'react'
import styled from 'styled-components'
import logo from '../images/UXSocietyLogo_full.png'
import twitter from '../images/twit.svg'
import medium from '../images/medium.svg'
import fb from '../images/fb.svg'

const Footer = styled.footer`
  padding-left: 168px;
  padding-right: 168px;
  padding-bottom: 100px;

  @media screen and (max-width: 1000px) {
    padding: 1rem;
  }
`

const Nav = styled.nav`
  display: flex;
  align-items: flex-start;
  margin-bottom: 100px;

  @media screen and (max-width: 1000px) {
    flex-wrap: wrap;
    margin-bottom: 16px;
  }
`

const Image = styled.img`
  margin-right: auto;

  @media screen and (max-width: 1000px) {
    align-self: center;
    margin-left: auto;
    margin-bottom: 1rem;
  }
`

const SubNav = styled.div`
  margin-right: ${props => (props.margin === 'no' ? 0 : '112px')};
  h3 {
    font-weight: bold;
  }

  @media screen and (max-width: 1000px) {
    margin-bottom: 16px;
  }
`

const SubFooter = styled.footer`
  color: #97a2ad;
  p {
    margin-right: auto;
  }
  img:not(:last-child) {
    margin-right: 24px;
  }
  display: flex;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    nav {
      display: flex;
      justify-content: center;
    }
    p {
      margin-bottom: 1rem;
    }
  }
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
      <nav>
        <img src={fb} alt="" />
        <img src={twitter} alt="" />
        <img src={medium} alt="" />
      </nav>
    </SubFooter>
  </Footer>
)
