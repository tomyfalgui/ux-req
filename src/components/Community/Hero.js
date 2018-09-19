import React from 'react'
import styled from 'styled-components'
import Nav from '../../styles/Nav'
import { Headline } from '../../styles/shared'
import hero from '../../images/hero.png'
import Triangle from './Triangle'

const HeroWrapper = styled.div`
  padding-top: 72px;
  padding-left: 168px;
  padding-right: 168px;
  min-height: 110vh;
`
const SubHeader = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  max-width: 500px;
  text-align: center;
  margin-top: 1.5rem;
  margin-bottom: -1.5rem;
`

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default () => (
  <HeroWrapper>
    <Nav />
    <Flex>
      <Headline>ux society community</Headline>
      <SubHeader>Learn and grow with an amazing community</SubHeader>
      <img src={hero} alt="" />
      <Triangle />
    </Flex>
  </HeroWrapper>
)
