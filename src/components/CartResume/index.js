import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import { useCard } from '../../hooks/CardContext'
import api from '../../services/api'
import formartCurrency from '../../utils/formartCurrency'
import { Button } from '../Button'
import { Container } from './styles'

export function CartResume() {
  const [finalPrice, setFinalPrice] = useState(0)
  const [deliveryTax] = useState(5)

  const { cartProducts, clearCard } = useCard()

  useEffect(() => {
    const someAllIntens = cartProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc
    }, 0)

    setFinalPrice(someAllIntens)
  }, [cartProducts])

  const submitOrder = async () => {
    if (cartProducts.length === 0) {
      toast.error('Carrinho vazio')
      return
    }

    const order = cartProducts.map(product => {
      return { id: product.id, quantity: product.quantity }
    })

    await toast.promise(api.post('orders', { products: order }), {
      pending: 'Realizando seu pedido...',
      success: 'Pedido realizado com sucesso',
      error: 'Falha ao tentar realizar seu pedido, tente novamente'
    })
    await clearCard()
  }

  return (
    <div>
      <Container>
        <div className="container-top">
          <h2 className="title">Resumo do Pedido</h2>
          <p className="items">Itens</p>
          <p className="items-price">{formartCurrency(finalPrice)}</p>
          <p className="delivery-tax">Taxa de entrega</p>
          <p className="delivery-price">{formartCurrency(deliveryTax)}</p>
        </div>
        <div className="container-botton">
          <p>Total</p>
          <p>{formartCurrency(finalPrice + deliveryTax)}</p>
        </div>
      </Container>
      <Button style={{ width: '100%', marginTop: 30 }} onClick={submitOrder}>
        Finalizar Pedido
      </Button>
    </div>
  )
}
