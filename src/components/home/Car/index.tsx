import React from 'react'

import { Gasoline } from '../../../assets'

import {
  Container,
  Details,
  Brand,
  Name,
  About, 
  Rent,
  Period,
  Price,
  Type,
  CarImage,
} from './styles'

export interface CarProps {
  id: number;
  brand: string;
  name: string;
  rent: {
    period: string;
    price: number;
  },
  thumbnail: string;
}

export function Car({ brand, name, rent, thumbnail }: CarProps) {
  return (
    <Container>
      <Details>
        <Brand>{brand}</Brand>
        <Name>{name}</Name>

        <About>
          <Rent>
            <Period>{rent.period}</Period>
            <Price>{`R$ ${rent.price}`}</Price>
          </Rent>

          <Type>
            <Gasoline />
          </Type>
        </About>
      </Details>

      <CarImage 
        source={{ uri: thumbnail }} 
        resizeMode="contain"
      />
    </Container>
  )
}
