import React from 'react'

import PropTypes from 'prop-types'

import { Button } from '../../components'
import { useCard } from '../../hooks/CardContext'
import formartCurrency from '../../utils/formartCurrency'
import { Container, Img, ProductName, ProductPrice } from './styles'

export function CardsProducts({ product }) {
  const { putProductsInCard } = useCard()
  return (
    <Container>
      <Img src={product.url} alt="foto dos produtos" />
      <div>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{formartCurrency(product.price)} </ProductPrice>
        <Button onClick={() => putProductsInCard(product)}>Adicionar</Button>
      </div>
    </Container>
  )
}

CardsProducts.propTypes = {
  product: PropTypes.object
}
