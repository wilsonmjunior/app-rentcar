import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(113)}px;

  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  padding: 0 24px 32px;

  background-color: ${({ theme }) => theme.colors.header};
`;

export const Label = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.text};
`;
