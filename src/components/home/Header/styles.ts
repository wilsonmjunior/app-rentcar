import styled from 'styled-components/native'

import LogoSvg from './logo.svg';

export const Container = styled.View`
  width: 100%;
  height: 113px;

  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 10px 10px;
  background-color: ${({ theme}) => theme.colors.header};
`

export const Logo = styled(LogoSvg)`
`;

export const Label = styled.Text`
  font-size: 15px;
  color: ${({ theme}) => theme.colors.text};
`;
