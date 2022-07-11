import React from 'react';

import Logo from './logo.svg';

import {
  Container,
  Label,
} from './styles';

export function Header() {
  return (
    <Container>
      <Logo />

      <Label>Total de 12 carros</Label>
    </Container>
  );
}
