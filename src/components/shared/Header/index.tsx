import React from 'react';

import { BackButton } from '../../shared/BackButton';

import {
  Container,
  ImageIndexes,
  ImageIndex,
} from './styles';

export function Header() {
  return (
    <Container>
      <BackButton
        color="#000"
      />

      <ImageIndexes>
        <ImageIndex active={false} />
        <ImageIndex active={false} />
        <ImageIndex active />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
      </ImageIndexes>
    </Container>
  );
}
