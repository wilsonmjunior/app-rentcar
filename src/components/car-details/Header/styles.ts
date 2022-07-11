import styled from 'styled-components/native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'


interface ImageIndexProps {
  active: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: ${getStatusBarHeight() + 18}px;
  padding: 0 24px;
`

export const ImageIndexes = styled.View`
  flex-direction: row;
`;

export const ImageIndex = styled.View<ImageIndexProps>`
  width: 6px;
  height: 6px;
  border-radius: 3px;

  background-color: ${({ theme, active }) => active ? theme.colors.title : theme.colors.shape};
  margin-left: 8px;
`;
