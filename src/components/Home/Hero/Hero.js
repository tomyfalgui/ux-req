import React from 'react'
import Header from '../Header/Nav'
import Cta from './Cta'
import styled from 'styled-components'
import image_hero from '../../../images/image_hero.png'

const HeroWrapper = styled.div`
  padding-top: 72px;
  padding-left: 168px;
  padding-right: 168px;
  position: relative;
  height: 110vh;
`

const Image = styled.img`
  position: absolute;
  right: 0;
  z-index: 1000;
`

export default () => (
  <HeroWrapper>
    <Header />
    <Image src={image_hero} />
    <Cta />
  </HeroWrapper>
)
