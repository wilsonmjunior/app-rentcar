import React from 'react'

import {
  Container,
  Content,
} from './styles'

interface Props<T> {
  data: T[];
  renderItem: (item: T) => React.ReactNode;
  keyExtractor: (item: T) => string;
}

export function Generic<T extends object>({ data, renderItem, keyExtractor }: Props<T>) {
  return (
    <Container>
      {
        data.map(item => (
          <Content key={keyExtractor(item)}>
            {renderItem(item)}
          </Content>
        ))
      }
    </Container>
  )
}
