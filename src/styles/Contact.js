import React from 'react'
import { Headline } from './shared'
import styled, { css } from 'styled-components'

const Contact = styled.div`
  padding-top: 72px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4rem;

  @media screen and (max-width: 1000px) {
    padding-top: 2rem;
  }
`

const Sub = styled.h2`
  font-weight: 700;
  font-size: 2rem;
  ${props =>
    props.hey === 'yes' &&
    css`
      margin-top: 24px;
    `};

  @media screen and (max-width: 1000px) {
    font-size: 1.4rem;
    text-align: center;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;
`

const Input = styled.input`
  padding: 16px 24px;
  border-radius: 8px;
  border: 1px solid #b7c1c8;
  align-self: stretch;
  margin-bottom: 32px;
  color: #97a2ad;
  font-family: 'Open sans', sans-serif;
`

const TextArea = styled.textarea`
  padding: 16px 24px;
  border-radius: 8px;
  border: 1px solid #b7c1c8;
  align-self: stretch;
  margin-bottom: 16px;
  color: #97a2ad;
  font-family: 'Open sans', sans-serif;
  resize: none;
  font-size: 14px;
`

const Btn = styled.button`
  margin-top: 3rem;
  background-color: #008ed4;
  color: white;
  font-variant: small-caps;
  border: 0;
  border-radius: 4px;
  padding: 0.8rem 2.5rem;
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
  <Contact>
    <Headline>contact us</Headline>
    <Sub hey="yes">We'd love to hear from you.</Sub>
    <Sub>Drop us a line below!</Sub>
    <Form>
      <Input type="text" placeholder="Name" />
      <Input type="text" placeholder="Email Address" />
      <TextArea name="" id="" cols="30" rows="6" placeholder="Your Message" />
      <Btn>send message</Btn>
    </Form>
  </Contact>
)
