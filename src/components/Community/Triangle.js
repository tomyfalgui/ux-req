import React from 'react'
import styled from 'styled-components'

const ContainingCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #008ed4;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`

export default () => (
  <ContainingCircle>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  </ContainingCircle>
)
