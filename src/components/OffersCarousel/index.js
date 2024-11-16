import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'
import { useHistory } from 'react-router-dom'

import { useCard } from '../../hooks/CardContext'
import api from '../../services/api'
import formartCurrency from '../../utils/formartCurrency'
import {
  Button,
  Container,
  ContainerItems,
  Img,
  CategoryText,
  Line
} from './styles'

export function OffersCarousel() {
  const [offers, setOffers] = useState([])
  const { putProductsInCard } = useCard()
  const { push } = useHistory()
  useEffect(() => {
    async function loadOffers() {
      const { data } = await api.get('products')

      const onlyOffert = data
        .filter(product => product.offer)
        .map(product => {
          return { ...product, formartedPrice: formartCurrency(product.price) }
        })

      setOffers(onlyOffert)
    }

    loadOffers()
  }, [])

  const breackPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 5 }
  ]

  return (
    <Container>
      <CategoryText>
        <h1>OFERTAS DO DIA</h1>
      </CategoryText>
      <Line />
      <Carousel
        itemsToShow={5}
        style={{ width: '90%' }}
        breakPoints={breackPoints}
      >
        {offers &&
          offers.map(product => (
            <ContainerItems key={product.id}>
              <Img src={product.url} alt="foto dos produtos" />
              <p>{product.name}</p>
              <p>{product.formartedPrice}</p>
              <Button
                onClick={() => {
                  putProductsInCard(product)
                  push('/carrinho')
                }}
              >
                Peça agora
              </Button>
            </ContainerItems>
          ))}
      </Carousel>
    </Container>
  )
}
