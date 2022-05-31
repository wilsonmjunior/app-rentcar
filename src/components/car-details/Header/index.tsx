import React from 'react'
import { BackButton } from '../../shared/BackButton'

import {
  Container
} from './styles'

export function Header() {
  return (
    <Container>
      <BackButton 
        color="#000"
      />
    </Container>
  )
}
