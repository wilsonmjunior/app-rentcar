import React from 'react';
import { useWindowDimensions } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Branding, Done } from '../../assets';
import { Button } from '../../components/shared/Button';

import {
  Container,
  Content,
  Title,
  Message,
  Footer,
  ConfirmButton,
} from './styles';

export function SchedulingComplete() {
  const { width } = useWindowDimensions();
  const theme = useTheme();

  return (
    <Container>
      <Branding width={width} />

      <Content>
        <Done width={80} height={80} />

        <Title>Carro alugado!</Title>

        <Message>
          Agora você só precisa ir{'\n'}
          até a concessionária da RENTX{'\n'}
          pegar o seu automóvel.
        </Message>

      </Content>

      <Footer>
        <ConfirmButton>
          <Button
            title='Ok'
            color={theme.colors.shape_dark}
          />
        </ConfirmButton>
      </Footer>
    </Container>
  )
}
