import React from 'react'
import { Headline } from '../../styles/shared'
import styled from 'styled-components'
import group from '../../images/group.png'

const StoriesWrapper = styled.div`
  padding-top: 72px;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 120px;

  @media screen and (max-width: 1000px) {
    margin-bottom: 40px;
  }
`

const Sub = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-top: 1rem;
  max-width: 650px;
  text-align: center;

  @media screen and (max-width: 1000px) {
    font-size: 2rem;
  }
`

const Sub2 = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  max-width: 300px;
  margin-top: 8px;
`

const ImageWrapper = styled.div`
  margin-top: 2rem;
  margin-left: -2rem;
  position: relative;
`

const DivBoi = styled.div`
  width: 400px;
  min-height: 300px;
  background-color: white;
  position: absolute;
  right: -100px;
  bottom: 100px;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.07);
  padding-top: 48px;
  padding-left: 40px;
  padding-right: 40px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1000px) {
    font-size: 2rem;
    width: 100%;
    right: 0;
    bottom: 0;
    top: 200px;
    padding-left: 60px;
  }
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

  @media screen and (max-width: 1000px) {
    font-size: 1rem;
  }
`

export default () => (
  <StoriesWrapper>
    <Headline>member stories</Headline>
    <Sub>Read up on a fellow member's UX journey</Sub>
    <ImageWrapper>
      <img src={group} alt="" />
      <DivBoi>
        <Headline>featured</Headline>
        <Sub2>How I fell in love with UXSoc's advocacy</Sub2>
        <FlexMe>
          <Circle />
          <Small>Jiggy Villaneuva, Executive Vice President</Small>
        </FlexMe>
        <Arrow>read jiggy's story</Arrow>
      </DivBoi>
    </ImageWrapper>
  </StoriesWrapper>
)
