import React from 'react'

import BannerCart from '../../assets/banner-carrinho.svg'
import { CartItens, CartResume } from '../../components'
import { CartImg, Container, Wrapper } from './styles'

export function Cart() {
  return (
    <Container>
      <CartImg src={BannerCart} alt="banner-cart" />
      <Wrapper>
        <CartItens />
        <CartResume />
      </Wrapper>
    </Container>
  )
}
