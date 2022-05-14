import React from 'react'
import { StatusBar } from 'react-native'

import { Header } from '../../components/home/Header'

import {
  Container, 
} from './styles'

export function Home() {
  return (
    <Container>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      
      <Header />
    </Container>
  )
}
