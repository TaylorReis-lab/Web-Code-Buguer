import React, { useEffect, useState } from 'react'

import PropTypes from 'prop-types'

import { CardsProducts } from '../../components'
import api from '../../services/api'
import {
  CategoryNames,
  Container,
  ProductsContainer,
  ProductsImg,
  Line
} from './styles'

export function Products({ location: { state } }) {
  let categoryId = 0
  if (state?.categoryId) {
    categoryId = state.categoryId
  }

  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilterProducts] = useState([])
  const [activeCategory] = useState(categoryId)
  const [activeCategoryName, setActiveCategoryName] = useState('')

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')
      const newCategories = [{ id: 0, name: 'Todos' }, ...data]
      setCategories(newCategories)
    }

    async function loadProducts() {
      const { data } = await api.get('products')
      setProducts(data)
    }

    loadProducts()
    loadCategories()
  }, [])

  useEffect(() => {
    if (activeCategory === 0) {
      setFilterProducts(products)
      setActiveCategoryName('Todos') // Categoria padrão
    } else {
      const newFilterProducts = products.filter(
        product => product.category_id === activeCategory
      )
      setFilterProducts(newFilterProducts)

      const selectedCategory = categories.find(
        category => category.id === activeCategory
      )
      setActiveCategoryName(selectedCategory?.name || '')
    }
  }, [activeCategory, products, categories])

  return (
    <Container>
      <ProductsImg>
        <h1>O MELHOR HAMBÚRGUER ESTÁ AQUI!</h1>
        <p>Esse cardápio está irresistível!</p>
      </ProductsImg>
      <CategoryNames>
        <p>{`${activeCategoryName} - Cardápio`}</p>
      </CategoryNames>
      <Line></Line>
      <ProductsContainer>
        {filteredProducts &&
          filteredProducts.map(product => (
            <CardsProducts key={product.id} product={product} />
          ))}
      </ProductsContainer>
    </Container>
  )
}

Products.propTypes = {
  location: PropTypes.object
}
