import React from 'react'
import { Headline } from '../../styles/shared'
import styled, { css } from 'styled-components'
import speaker from '../../images/speaker.png'

const EventWrapper = styled.div`
  background-color: #eef1f6;
  padding-top: 72px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding-bottom: 72px;
`
const Sub = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-top: 1rem;
`

const Tabs = styled.div`
  margin-top: 16px;
  display: flex;
  position: relative;

  &::after {
    content: '';
    width: 65%;
    bottom: -8px;
    left: -30px;
    ${props =>
      props.active === 'books' &&
      css`
        transform: translateX(0%);
      `};
    ${props =>
      props.active === 'articles' &&
      css`
        transform: translateX(100%);
      `};
    position: absolute;
    display: block;
    border-bottom: 1px solid #000;
    z-index: 1000;
    transition: transform 0.2s;
  }
`

const Tab = styled.h3`
  ${props =>
    props.yeah === 'yes' &&
    css`
      margin-left: 96px;
    `} font-weight: bold;
  color: #b3bcc4;
  cursor: pointer;
  transition: color 0.2s;
  color: ${props => props.active && '#000'};

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: -30px;
    display: block;
    width: 130%;
    border-bottom: 1px solid #b3bcc4;
  }
`

const Left = styled.div`
  padding: 48px 24px 36px 36px;
  height: 480px;
  width: 450px;
  background-color: white;
  display: flex;
  flex-direction: column;

  h2 {
    color: #b3bcc4;
    font-variant-caps: small-caps;
    font-size: 1.3rem;
    letter-spacing: 0.08em;
  }

  h3 {
    font-weight: bold;
    font-size: 2rem;
  }

  ul {
    margin-top: 0.8rem;
    li {
      font-size: 0.8rem;
      line-height: 1.6;
    }
  }

  h4 {
    margin-top: 1.2rem;
    font-weight: bold;
  }

  p {
    font-size: 0.8rem;
    margin-top: 0.4rem;
    line-height: 1.6;
  }

  h5 {
    font-variant-caps: small-caps;
    font-size: 1.3rem;
    align-self: flex-end;
    font-weight: bold;
    color: #008ed4;
    margin-top: 1rem;
  }
`

const Main = styled.div`
  margin-top: 64px;
  display: flex;
`
export default class Events extends React.Component {
  state = {
    active: 'books',
  }

  changeActive = name => () => {
    this.setState({
      active: name,
    })
  }
  render() {
    return (
      <EventWrapper>
        <Headline>events</Headline>
        <Sub>What's happening</Sub>
        <Tabs active={this.state.active}>
          <Tab
            active={this.state.active === 'books'}
            onClick={this.changeActive('books')}
          >
            Upcoming
          </Tab>
          <Tab
            active={this.state.active === 'articles'}
            onClick={this.changeActive('articles')}
            yeah="yes"
          >
            Past
          </Tab>
        </Tabs>
        <Main>
          <Left>
            <h2>information architecture</h2>
            <h3>UX&Chill Ep 08</h3>
            <ul>
              <li>24 September 2018, 5:00 to 7:30 PM</li>
              <li>Faura Hall, Ateneo de Manila University</li>
              <li>Avery Si</li>
            </ul>
            <h4>About the event</h4>
            <p>
              Avery Si will be talking about the basics of information
              architecture, its methodologies and tools which can improve the
              overall experience of a product or service.
            </p>

            <h4>About the speaker</h4>
            <p>
              Avery Si is a UI/UX designer in OnlineJobs. He is currently
              redesigning the website of OnlineJob's platform. He has also
              interned in Globe Telecom last year.
            </p>
            <h5>register now</h5>
          </Left>
          <img src={speaker} alt="" />
        </Main>
      </EventWrapper>
    )
  }
}
