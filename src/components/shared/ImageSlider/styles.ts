import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View``;

export const CarImageWrapper = styled.View`
  width: ${Dimensions.get('window').width}px;
  height: 132px;

  justify-content: center;
  align-items: center;
`;

export const CarImage = styled.Image`
  width: 280px;
  height: 132px;
`;
