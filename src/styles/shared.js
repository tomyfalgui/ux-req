import styled from 'styled-components'

export const Headline = styled.h2`
  font-size: 1rem;
  letter-spacing: 0.3em;
  color: #b3bcc4;
  font-weight: 600;
  font-variant: small-caps;
`

export const Btn = styled.button`
  margin-top: 3rem;
  background-color: #008ed4;
  color: white;
  font-variant: small-caps;
  border: 0;
  border-radius: 4px;
  padding: 1rem 1.8rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
  }
`
