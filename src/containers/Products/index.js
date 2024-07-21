import React, { useEffect, useState } from 'react'

import PropTypes from 'prop-types'

import BannerProducts from '../../assets/banner-produtos.svg'
import { CardsProducts } from '../../components'
import api from '../../services/api'
import {
  CategoriesMenu,
  CategoryButton,
  Container,
  ProductsContainer,
  ProductsImg
} from './styles'

export function Products({ location: { state } }) {
  let categoryId = 0
  if (state?.categoryId) {
    categoryId = state.categoryId
  }
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilterProducts] = useState([])
  const [activeCategory, setActiveCategory] = useState(categoryId)

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

      const newCategories = [{ id: 0, name: 'Todas' }, ...data]

      setCategories(newCategories)
    }

    async function loadProducts() {
      const { data } = await api.get('products')
      console.log(data)

      setProducts(data)
    }

    loadProducts()
    loadCategories()
  }, [])

  useEffect(() => {
    if (activeCategory === 0) {
      setFilterProducts(products)
    } else {
      const newFilterProducts = products.filter(
        product => product.category_id === activeCategory
      )

      setFilterProducts(newFilterProducts)
    }
  }, [activeCategory, products])

  return (
    <Container>
      <ProductsImg src={BannerProducts} alt="banner-products" />
      <CategoriesMenu>
        {categories &&
          categories.map(category => (
            <CategoryButton
              type="button"
              key={category.id}
              isActiveCategory={activeCategory === category.id}
              onClick={() => {
                setActiveCategory(category.id)
              }}
            >
              {category.name}
            </CategoryButton>
          ))}
      </CategoriesMenu>
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
