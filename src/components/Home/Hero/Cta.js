import React from 'react'
import styled from 'styled-components'
import { Headline } from '../../../styles/shared'

const Head = styled.h1`
  font-size: 4rem;
  font-weight: 700;
`

const HeadWrapper = styled.div`
  margin-top: 1rem;
`

const CtaBtn = styled.button`
  margin-top: 3rem;
  background-color: #008ed4;
  color: white;
  font-variant: small-caps;
  border: 0;
  border-radius: 4px;
  padding: 1rem 1.5rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
  }
`

export default () => (
  <div>
    <Headline>our north star</Headline>
    <HeadWrapper>
      <Head>We make</Head>
      <Head>design leaders</Head>
    </HeadWrapper>
    <CtaBtn>start your journey</CtaBtn>
  </div>
)
