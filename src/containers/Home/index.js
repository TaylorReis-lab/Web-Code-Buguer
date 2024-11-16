import React from 'react'

import { CategoryCarrosel, OffersCarousel } from '../../components'
import { useUser } from '../../hooks/UserContext'
import { Container, HomeImg } from './styles'

export function Home() {
  const { userData } = useUser()
  return (
    <Container>
      <HomeImg>
        <h1>Seja Bem Vindo!! {userData.name} </h1>
        <p>Qual será a pedida de hoje?</p>
      </HomeImg>
      <CategoryCarrosel />
      <OffersCarousel />
    </Container>
  )
}
