import React from 'react'
import { Headline, Btn } from '../../../styles/shared'
import cardpic from '../../../images/card_pic.png'
import styled from 'styled-components'

const CardWrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 1rem;
  width: 40%;
  border-radius: 8px;
  padding-bottom: 64px;
`

const Sub = styled.h2`
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: 1rem;
`

const Paragraph = styled.p`
  max-width: 70%;
  text-align: center;
  line-height: 1.65;
`

export default function Card({ headline, sub, text, btntext }) {
  return (
    <CardWrapper>
      <img src={cardpic} alt="" />
      <Headline>{headline}</Headline>
      <Sub>{sub}</Sub>
      <Paragraph>{text}</Paragraph>
      <Btn>{btntext}</Btn>
    </CardWrapper>
  )
}
