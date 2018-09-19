import React from 'react'
import styled from 'styled-components'
import { Headline, Btn } from '../../../styles/shared'

const Head = styled.h1`
  font-size: 4rem;
  font-weight: 700;
`

const HeadWrapper = styled.div`
  margin-top: 1rem;
`

export default () => (
  <div>
    <Headline>our north star</Headline>
    <HeadWrapper>
      <Head>We make</Head>
      <Head>design leaders</Head>
    </HeadWrapper>
    <Btn>start your journey</Btn>
  </div>
)
