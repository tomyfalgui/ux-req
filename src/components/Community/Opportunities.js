import React from 'react'
import { Headline } from '../../styles/shared'
import styled from 'styled-components'
import bottom from '../../images/bottom.png'
import google from '../../images/google.svg'

const OWrapper = styled.div`
  padding-top: 72px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding-bottom: 72px;
  overflow: hidden;
`

const Sub = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-top: 1rem;
  max-width: 650px;
  text-align: center;
  margin-bottom: 32px;

  @media screen and (max-width: 1000px) {
    font-size: 2rem;
  }
`

const Subs = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  max-width: 650px;
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  height: 420px;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.1);
  padding-top: 48px;
  margin-right: 48px;

  @media screen and (max-width: 1000px) {
    padding-top: 24px;
    margin-right: 0;
    margin-bottom: 24px;
    padding-right: 1rem;
    padding-left: 1rem;
  }
`

//C0EAFF

const WrappingGame = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-left: 72px;
  padding-right: 72px;
  margin-bottom: 48px;
  margin-top: 36px;

  @media screen and (max-width: 1000px) {
    margin: 0;
  }
`

const Job = styled.span`
  background-color: #c0eaff;
  margin-right: 16px;
  padding-left: 28px;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-right: 28px;
  border-radius: 16px;
  font-size: 0.7rem;
`

const JobWrap = styled.div`
  margin-top: 16px;
`

const PlaceOfWork = styled.h2`
  font-size: 1rem;
  display: flex;
  align-items: center;
  img {
    margin-right: 8px;
  }
`

const JobDescription = styled.p`
  max-width: 400px;
  margin-top: 32px;
  line-height: 1.5;
  font-size: 0.9rem;
`

const Bottom = styled.div`
  height: 18%;
  background-color: #f1f5fa;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: auto;
  padding-right: 48px;
  font-size: 1.2rem;
  font-variant: small-caps;
  font-weight: bold;
  color: #008ed4;

  @media screen and (max-width: 1000px) {
    height: 12%;
  }
`

const InnerCard = styled.div`
  padding-left: 54px;
  padding-right: 36px;
`
const Card = () => (
  <CardWrapper>
    <InnerCard>
      <PlaceOfWork>
        <img src={google} alt="" /> Google
      </PlaceOfWork>
      <Subs>Visual Designer</Subs>
      <span>Bonifacio Global City, Taguig, Philippines</span>
      <JobWrap>
        <Job>Full-time</Job>
        <Job>2 yrs experience</Job>
      </JobWrap>
      <JobDescription>
        At Google, Visual designers weave iconography, typography, color, space,
        and texture together to help our users successfully navigate through our
        products.
      </JobDescription>
    </InnerCard>
    <Bottom>
      <span>apply now</span>
    </Bottom>
  </CardWrapper>
)

const Img = styled.img`
  @media screen and (max-width: 1000px) {
    margin-bottom: 32px;
  }
`
export default () => (
  <OWrapper>
    <Headline>opportunities</Headline>
    <Sub>Discover your passion through our curated list of job openings</Sub>
    <Img src={bottom} alt="" />
    <WrappingGame>
      <Card />
      <Card />
    </WrappingGame>
    <WrappingGame>
      <Card />
      <Card />
    </WrappingGame>
  </OWrapper>
)
