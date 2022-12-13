import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 109px;
  height: 92px;
  background-color: ${({ theme }) => theme.colors.background_primary};

  padding: 18px 0 16px;
  margin-bottom: 8px;

  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(13)}px;
  color: ${({ theme }) => theme.colors.text};
`;
