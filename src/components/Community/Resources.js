import React from 'react'
import styled, { css } from 'styled-components'
import { Headline } from '../../styles/shared'
import Book from '../../images/book.png'

const RWrap = styled.div`
  background-color: #eef1f6;
  min-height: 100vh;
  padding-top: 72px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 72px;
`

const Sub = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-top: 1rem;
  max-width: 650px;
  text-align: center;
`

const Tabs = styled.div`
  margin-top: 16px;
  display: flex;
  position: relative;

  &::after {
    content: '';
    width: 35%;
    bottom: -5px;
    left: -40px;
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
    ${props =>
      props.active === 'podcasts' &&
      css`
        transform: translateX(210%);
      `};
    position: absolute;
    display: block;
    border-bottom: 1px solid #000;
    z-index: 1000;
    transition: transform 0.2s;
  }
`

const Tab = styled.h3`
  margin-right: 48px;
  font-weight: bold;
  color: #b3bcc4;
  cursor: pointer;
  transition: color 0.2s;
  color: ${props => props.active && '#000'};

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: -40px;
    display: block;
    width: 110%;
    border-bottom: 1px solid #b3bcc4;
  }
`

const Container = styled.div`
  margin-top: 24px;
  left: -120px;
  position: relative;
`

const Bottom = styled.h3`
  color: #008ed4;
  font-variant-caps: small-caps;
  font-weight: bold;
  margin-top: 36px;
`

const DivBoi = styled.div`
  width: 450px;
  height: 350px;
  background-color: white;
  position: absolute;
  right: -300px;
  bottom: 150px;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.07);
  padding-top: 48px;
  padding-left: 40px;
  padding-right: 40px;
  display: flex;
  flex-direction: column;
`

const Circle = styled.span`
  width: 30px;
  height: 30px;
  background-color: #c4c4c4;
  border-radius: 50%;
  display: inline-block;
  margin-right: 1rem;
`

const FlexMe = styled.div`
  display: flex;
  margin-top: 1rem;
  align-items: center;
`
const Small = styled.span`
  font-size: 0.8rem;
`

const Arrow = styled.span`
  color: #008ed4;
  font-variant-caps: small-caps;
  font-weight: bold;
  align-self: flex-end;
  margin-top: 36px;
`

const Sub2 = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  max-width: 300px;
  margin-top: 8px;
`

const P = styled.p`
  line-height: 1.4;
  font-size: 0.9rem;
  margin-top: 16px;
`

export default class Resources extends React.Component {
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
      <RWrap>
        <Headline>resources</Headline>
        <Sub>Here are the resources we've curated for you this week</Sub>
        <Tabs active={this.state.active}>
          <Tab
            active={this.state.active === 'books'}
            onClick={this.changeActive('books')}
          >
            Books
          </Tab>
          <Tab
            active={this.state.active === 'articles'}
            onClick={this.changeActive('articles')}
          >
            Articles
          </Tab>
          <Tab
            active={this.state.active === 'podcasts'}
            onClick={this.changeActive('podcasts')}
          >
            Podcasts
          </Tab>
        </Tabs>
        <Container>
          <img src={Book} alt="" />
          <DivBoi>
            <Headline>book</Headline>
            <Sub2>The State of UX in Asia</Sub2>
            <FlexMe>
              <Circle />
              <Small>Ben Kim</Small>
            </FlexMe>
            <P>
              This is an annual report highlighting the State of User Experience
              Design and Research in the Asian continent. This report features
              real stories from UX Practicioners all over the region.
            </P>
            <Arrow>start reading</Arrow>
          </DivBoi>
        </Container>
        <Bottom>browse through past resources</Bottom>
      </RWrap>
    )
  }
}
