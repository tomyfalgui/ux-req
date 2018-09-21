import React from 'react'
import logo from '../images/UXSocietyLogo_full.png'
import Menu from '../components/Menu'
import styled from 'styled-components'
import { Link } from 'gatsby'

const NavBar = styled.nav`
  display: flex;
  align-items: center;
  margin-bottom: 64px;
  justify-content: space-between;
  padding-left: 1rem;
  padding-right: 1rem;

  @media screen and (min-width: 700px) {
    display: none;
  }
`

const Modal = styled.div`
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  transform: ${props => (props.open ? 'translateY(0)' : 'translateY(-100%)')};
  transition: transform 0.4s;
  background-color: white;
  z-index: 123123;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 2rem;

  a {
    text-decoration: none;
    color: #008ed4;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    font-size: 1.7rem;
    margin-bottom: 3rem;
    font-weight: bold;
  }
`

export default class MobileNav extends React.Component {
  state = {
    open: false,
  }
  toggleMenu = () => {
    console.log(this.state.open)
    this.setState(prevState => ({ open: !prevState.open }))
  }
  render() {
    return (
      <NavBar>
        <Link style={{ marginLeft: '-5px' }} to="/">
          <img src={logo} alt="" />
        </Link>
        <Menu onClick={this.toggleMenu} />
        <Modal open={this.state.open}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#aaa"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={this.toggleMenu}
            style={{
              marginBottom: '4rem',
              cursor: 'pointer',
            }}
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
          <Link>About Us</Link>
          <Link to="/community/">Community</Link>
          <Link>Work</Link>
          <Link>Contact Us</Link>
        </Modal>
      </NavBar>
    )
  }
}
