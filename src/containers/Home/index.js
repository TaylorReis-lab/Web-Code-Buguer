import React from 'react'

import BannerHome from '../../assets/banner-home.svg'
import { CategoryCarrosel, OffersCarousel } from '../../components'
import { Container, HomeImg } from './styles'

export function Home() {
  return (
    <Container>
      <HomeImg src={BannerHome} alt="banner-home" />
      <CategoryCarrosel />
      <OffersCarousel />
    </Container>
  )
}
