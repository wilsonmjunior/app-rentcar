import React from 'react'

// import LogoSvg from './logo.svg';

import {
  Container, 
  Label, 
  Logo,
} from './styles'

export function Header() {
  return (
    <Container>
      <Logo />
      <Label>Total de 12 carros</Label>
    </Container>
  )
}
