import React from 'react'
import styled from 'styled-components'
import Card from './Card'

const Compare = styled.div`
  background-color: #eef1f6;
  height: 120vh;
  z-index: 100;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-left: 168px;
  padding-right: 168px;
  padding-top: 72px;
`

export default () => (
  <Compare>
    <Card
      headline={'community'}
      sub={'Geared for Growth'}
      text={
        'Engage yourself with the community. Discover what you can do and how you can grow with us.'
      }
      btntext={'experience the mafia'}
    />
    <Card
      headline={'consultancy'}
      sub={'Crafted for Work'}
      text={
        'We help businesses improve their products and services through intentional design, and we never fail to deliver.'
      }
      btntext={'explore our projects'}
    />
  </Compare>
)
