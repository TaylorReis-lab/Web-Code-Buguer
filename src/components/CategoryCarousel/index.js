import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import api from '../../services/api'
import {
  Button,
  Container,
  ContainerItems,
  Img,
  CategoryText,
  Line
} from './styles'

export function CategoryCarrosel() {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

      setCategories(data)
    }

    loadCategories()
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
        <h1>Categorias</h1>
      </CategoryText>
      <Line />
      <Carousel
        itemsToShow={5}
        style={{ width: '90%' }}
        breakPoints={breackPoints}
      >
        {categories &&
          categories.map(category => (
            <ContainerItems key={category.id}>
              <Img src={category.url} alt="foto da categoria" />
              <Button
                to={{
                  pathname: '/produtos',
                  state: { categoryId: category.id }
                }}
              >
                {category.name}
              </Button>
            </ContainerItems>
          ))}
      </Carousel>
    </Container>
  )
}
