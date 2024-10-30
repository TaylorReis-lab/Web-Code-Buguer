import React from 'react'

import Logo from '../../assets/logo.svg'
import { CartItens, CartResume } from '../../components'
import { CartImg, Container, Wrapper } from './styles'

export function Cart() {
  return (
    <Container>
      <CartImg>
        <img src={Logo} alt="logo-banner" />
      </CartImg>
      <Wrapper>
        <CartItens />
        <CartResume />
      </Wrapper>
    </Container>
  )
}
