import React from 'react'
import styled from 'styled-components'
import c1 from '../../../images/capture_1.png'
import c2 from '../../../images/capture_2.png'

const Capture = styled.div`
  background-color: #008ed4;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const CaptureParagraph = styled.p`
  color: white;
  max-width: 500px;
  text-align: center;
  line-height: 1.65;
  font-size: 1.3rem;

  @media screen and (max-width: 1000px) {
    font-size: 1.3rem;
    max-width: 450px;
  }
`
const Image1 = styled.img`
  position: absolute;
  top: -6rem;
  right: 0;
  @media screen and (max-width: 1000px) {
    width: 40%;
    top: -4rem;
  }
`
const Image2 = styled.img`
  position: absolute;
  bottom: -4rem;
  left: 0;
  @media screen and (max-width: 1000px) {
    width: 50%;
    bottom: -4rem;
  }
`

export default () => (
  <Capture>
    <Image1 src={c2} />
    <CaptureParagraph>
      User experience Society aims to guide the design leaders of tomorrow,
      creating products and services that will make the world a better place
    </CaptureParagraph>
    <Image2 src={c1} />
  </Capture>
)
