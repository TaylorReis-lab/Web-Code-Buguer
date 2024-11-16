import React from 'react'

import { Container, P } from './styles'

export function CopyRight() {
  return (
    <Container>
      <P>
        Desenvolvido por Taylor Reis - {new Date().getFullYear()} - Todos os
        direitos reservados
      </P>
    </Container>
  )
}
