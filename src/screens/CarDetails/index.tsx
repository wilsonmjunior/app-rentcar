import React, { useMemo } from 'react';
import { Accessory } from '../../components/car-details/Accessory';

import { Header } from '../../components/car-details/Header';
import { ImageSlider } from '../../components/car-details/ImageSlider';

import {
  Speed,
  Up,
  Force,
  Gasoline,
  Transmission,
  People,
} from '../../assets';

import {
  Container,
  ImageSliderWrapper,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  AccesoriesWrapper,
  Footer,
} from './styles';
import { Button } from '../../components/shared/Button';

export function CarDetails() {
  const price = useMemo(() => Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(580), []);

  return (
    <Container>
      <Header />

      <ImageSliderWrapper>
        <ImageSlider
          imagesUrl={[
            'https://images.carexpert.com.au/app/uploads/2022/03/2022-audi-rs3-sportback-a214747large-etched-1647855251-s-1958x986.png',
          ]}
        />
      </ImageSliderWrapper>

      <Content>
        <Details>
          <Description>
            <Brand>Audi</Brand>
            <Name>RS3</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>{price}</Price>
          </Rent>
        </Details>

        <AccesoriesWrapper>
          <Accessory title="380km/h" icon={Speed} />
          <Accessory title="3.2s" icon={Up} />
          <Accessory title="800 HP" icon={Force} />
          <Accessory title="Gasolina" icon={Gasoline} />
          <Accessory title="Auto" icon={Transmission} />
          <Accessory title="2 pessoas" icon={People} />
        </AccesoriesWrapper>

        <About>
          Este é automóvel desportivo. Surgiu do
          lendário touro de lide indultado na praça
          Real Maestranza de Sevilla. É um belíssimo
          carro para quem gosta de acelerar.
        </About>
      </Content>

      <Footer>
        <Button
          title="Teste"
          onPress={() => console.log('teste')}
        />
      </Footer>
    </Container>
  );
}
