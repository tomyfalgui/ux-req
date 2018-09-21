import React from 'react'
import styled from 'styled-components'
import { Headline, Btn } from '../../../styles/shared'

const Head = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  @media screen and (max-width: 1000px) {
    font-size: 2rem;
    text-align: center;
  }
`

const HeadWrapper = styled.div`
  margin-top: 1rem;
  @media screen and (max-width: 1000px) {
    margin-top: 0.5rem;
  }
`

const Wrapper = styled.div`
  position: relative;
  z-index: 1000;
  @media screen and (max-width: 1000px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`
export default () => (
  <Wrapper>
    <Headline>our north star</Headline>
    <HeadWrapper>
      <Head>We make</Head>
      <Head>design leaders</Head>
    </HeadWrapper>
    <Btn>start your journey</Btn>
  </Wrapper>
)
