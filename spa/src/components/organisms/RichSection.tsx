import React from 'react'
import { Box } from 'react-bulma-components';

import styled from 'styled-components'

export const RichSection = (props: { title: string, desc?: string, children: JSX.Element }) => {
  return (
    <StyledBox>
      <h1>{props.title}</h1>
      <p>{props.desc}</p>
      {props.children}
    </StyledBox>
  )
}

const StyledBox = styled(Box)`
  > h1 {
    font-weight: bold;
    font-size: 2rem;
  }
  > p {
    font-weight: bold;
  }
`