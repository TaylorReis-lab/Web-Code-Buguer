import React, { createContext, useContext, useEffect, useState } from 'react'

import PropTypes from 'prop-types'

const CardContext = createContext({})

export const CardProvider = ({ children }) => {
  const [cartProducts, setCardProducts] = useState([])

  const updateLocalStorege = async products => {
    await localStorage.setItem('codebuguer:cardInfo', JSON.stringify(products))
  }

  const putProductsInCard = async product => {
    const cartIndex = cartProducts.findIndex(prd => prd.id === product.id)

    let newCardProducts = []
    if (cartIndex >= 0) {
      newCardProducts = cartProducts

      newCardProducts[cartIndex].quantity =
        newCardProducts[cartIndex].quantity + 1

      setCardProducts(newCardProducts)
    } else {
      product.quantity = 1
      newCardProducts = [...cartProducts, product]
      setCardProducts(newCardProducts)
    }

    await updateLocalStorege(newCardProducts)
  }

  const deleteProducts = async productId => {
    const newCart = cartProducts.filter(product => product.id !== productId)

    setCardProducts(newCart)
    await updateLocalStorege(newCart)
  }

  const increaseProducts = async productId => {
    const newCart = cartProducts.map(product => {
      return product.id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product
    })

    setCardProducts(newCart)

    await updateLocalStorege(newCart)
  }

  const decreaseProducts = async productId => {
    const cartIndex = cartProducts.findIndex(pd => pd.id === productId)

    if (cartProducts[cartIndex].quantity > 1) {
      const newCart = cartProducts.map(product => {
        return product.id === productId
          ? { ...product, quantity: product.quantity - 1 }
          : product
      })

      setCardProducts(newCart)

      await updateLocalStorege(newCart)
    } else {
      deleteProducts(productId)
    }
  }

  const clearCard = async () => {
    const newCart = []

    setCardProducts(newCart)
    await updateLocalStorege(newCart)
  }

  useEffect(() => {
    const loadUserData = async () => {
      const clientCartData = await localStorage.getItem('codebuguer:cardInfo')
      if (clientCartData) {
        setCardProducts(JSON.parse(clientCartData))
      }
    }
    loadUserData()
  }, [])
  return (
    <CardContext.Provider
      value={{
        putProductsInCard,
        cartProducts,
        increaseProducts,
        decreaseProducts,
        clearCard
      }}
    >
      {children}
    </CardContext.Provider>
  )
}

export const useCard = () => {
  const context = useContext(CardContext)

  if (!context) {
    throw new Error('useCard most be used with UserContext')
  }

  return context
}

CardProvider.propTypes = {
  children: PropTypes.node
}
