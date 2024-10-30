import styled from 'styled-components'

import Backgraund from '../../assets/background.svg'
import BannerCart from '../../assets/checkout.svg'

export const Container = styled.div`
  background-color: #555555;
  background: url(${Backgraund});
  min-height: calc(100vh - 72px);
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 30px;
  padding-bottom: 30px;
`

export const CartImg = styled.div`
  background: url(${BannerCart});
  width: 100%;
  padding: 40px;
  img {
    padding-left: 615px;
  }
`

export const LogoCart = styled.img`
  display: flex;
  align-items: center;
`
