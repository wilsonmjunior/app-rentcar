import React from 'react';
import { useTheme } from 'styled-components';
import { MaterialIcons } from '@expo/vector-icons';
import { BorderlessButtonProps } from 'react-native-gesture-handler';

import {
  Container,
} from './styles';

interface Props extends BorderlessButtonProps {
  color?: string;
}

export function BackButton({ color }: Props) {
  const theme = useTheme();

  return (
    <Container>
      <MaterialIcons
        name="chevron-left"
        size={24}
        color={color || theme.colors.text}
      />
    </Container>
  );
}
