import React from "react";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components/native";

import { Arrow } from '../../assets';
import { BackButton } from '../../components/shared/BackButton';

import {
  Container,
  Header,
  Title,
  BackButtonWrapper,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValueWrapper,
  DateValue,
} from './styles';

export function Scheduling() {
  const theme = useTheme();

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      <Header>
        <BackButtonWrapper>
          <BackButton
            color={theme.colors.off_title}
            onPress={() => console.log("deltoide")}
          />
        </BackButtonWrapper>

        <Title>
          Escolha uma
          {"\n"}
          data de início e
          {"\n"}
          fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValueWrapper selected={false}>
              <DateValue></DateValue>
            </DateValueWrapper>
          </DateInfo>

          <Arrow />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValueWrapper selected={false}>
              <DateValue></DateValue>
            </DateValueWrapper>
          </DateInfo>
        </RentalPeriod>
      </Header>
    </Container>
  );
}
