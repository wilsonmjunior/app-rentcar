import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const ImageSliderWrapper = styled.View``;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 24,
    alignItems: 'center',
  },
  showsVerticalScrollIndicator: false,
})``;

export const Details = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  margin-top: 32px;
`;

export const Description = styled.View``;

const textProps = css`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: ${RFValue(10)}px;

  text-transform: uppercase;
`;

export const Brand = styled.Text`
  ${textProps};
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(25)}px;
`;

export const Rent = styled.View``;

export const Period = styled.Text`
  ${textProps};
`;

export const Price = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.main};
  font-size: ${RFValue(25)}px;
`;

export const AccesoriesWrapper = styled.View`
  width: 100%;

  display: row;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  margin-top: 16px;
`;

export const Footer = styled.View`
  width: 100%;
  padding: 24px 24px ${getBottomSpace()}px;
`;

export const RentalPeriod = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 40px;

  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.line};
  padding-bottom: 16px;
`;

export const CalendarIcon = styled.View`
  width: 48px;
  height: 48px;
  background-color: ${({ theme }) => theme.colors.main};

  align-items: center;
  justify-content: center;
`;

export const DateInfo = styled.View``;

const fontTitle = css`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: ${RFValue(10)}px;

  text-transform: uppercase;
`;

export const DateTitle = styled.Text`
  ${fontTitle};
`;

const fontValue = css`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(15)}px;
`;

export const DateValue = styled.Text`
  ${fontValue};
`;

export const RentalPrice = styled.View`
  width: 100%;
  margin-top: 16px;
`;

export const RentalPriceLabel = styled.Text`
  ${fontTitle};
`;

export const RentalPriceDetails = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const RentalPriceQuota = styled.Text`
  ${fontValue};
`;

export const RentalPriceTotal = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.success};
  font-size: ${RFValue(24)}px;
`;
