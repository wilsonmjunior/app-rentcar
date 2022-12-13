import React from 'react';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components/native';

import { Accessory } from '../../components/shared/Accessory';
import { Header } from '../../components/shared/Header';
import { ImageSlider } from '../../components/shared/ImageSlider';
import { Button } from '../../components/shared/Button';
import {
  Speed,
  Up,
  Force,
  Gasoline,
  Transmission,
  People,
} from '../../assets';

import { useCarDetailsController } from './controller';
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
  AccesoriesWrapper,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,
  Footer,
} from './styles';

export function SchedulingDetails() {
  const { price } = useCarDetailsController();

  const theme = useTheme();

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

        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name='calendar'
              size={RFValue(24)}
              color={theme.colors.off_title}
            />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>10/12/2022</DateValue>
          </DateInfo>

          <Feather
            name='chevron-right'
            size={RFValue(14)}
            color={theme.colors.text}
          />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>10/12/2022</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
            <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
         </RentalPriceDetails>
        </RentalPrice>
      </Content>

      <Footer>
        <Button
          title="Alugar agora"
          onPress={() => console.log('teste')}
          color={theme.colors.success}
        />
      </Footer>
    </Container>
  );
}
