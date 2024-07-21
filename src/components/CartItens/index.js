import React from 'react'

import { useCard } from '../../hooks/CardContext'
import formartCurrency from '../../utils/formartCurrency'
import { Container, ContainerCards, EmptyCart, Header } from './styles'

export function CartItens() {
  const { cartProducts, increaseProducts, decreaseProducts } = useCard()

  return (
    <Container>
      <Header>
        <p></p>
        <p>Itens</p>
        <p>Preço</p>
        <p style={{ paddingRight: 30 }}>Quantidade</p>
        <p>Total</p>
      </Header>
      {cartProducts && cartProducts.length > 0 ? (
        cartProducts.map(cart => (
          <ContainerCards key={cart.id}>
            <img src={cart.url} alt="foto-product" />
            <p>{cart.name}</p>
            <p>{formartCurrency(cart.price)}</p>
            <div className="quantity-container">
              <button onClick={() => decreaseProducts(cart.id)}>-</button>
              <p>{cart.quantity}</p>
              <button onClick={() => increaseProducts(cart.id)}>+</button>
            </div>
            <p>{formartCurrency(cart.quantity * cart.price)}</p>
          </ContainerCards>
        ))
      ) : (
        <EmptyCart>Carrinho Vazio</EmptyCart>
      )}
    </Container>
  )
}
