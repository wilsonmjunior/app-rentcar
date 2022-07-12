import { FlatList } from 'react-native';
import styled from 'styled-components/native';

import { CarProps } from '../../components/home/Car';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Title = styled.Text`
  font-size: 30px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.colors.title};
`;

export const CarList = ((styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
  showsVerticalScrollIndicator: false,
})`
  background-color: 'white';
` as unknown) as typeof FlatList<CarProps>);
