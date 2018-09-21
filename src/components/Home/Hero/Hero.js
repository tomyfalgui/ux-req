import React from 'react'
import Header from '../../../styles/Nav'
import MobileHeader from '../../../styles/MobileNav'
import Cta from './Cta'
import styled from 'styled-components'
import image_hero from '../../../images/image_hero.png'

const HeroWrapper = styled.div`
  padding-top: 72px;
  padding-left: 168px;
  padding-right: 168px;
  position: relative;
  margin-bottom: 18rem;

  @media screen and (max-width: 1000px) {
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 1rem;
    margin-bottom: 14rem;
  }

  @media screen and (max-width: 600px) {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-top: 1rem;
    margin-bottom: 10rem;
  }

  @media screen and (max-width: 600px) {
    padding-left: 0.3rem;
    padding-right: 0.3rem;
    padding-top: 0.5rem;
    margin-bottom: 6rem;
  }
`

const Image = styled.img`
  position: absolute;
  right: 0;
  z-index: 500;

  @media screen and (max-width: 1000px) {
    width: 80%;
    opacity: 0.5;
  }
`

export default () => (
  <HeroWrapper>
    <Header />
    <MobileHeader />
    <Image src={image_hero} />
    <Cta />
  </HeroWrapper>
)
