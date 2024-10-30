import styled from 'styled-components'

import Background from '../../assets/background.svg'
import BannerProducts from '../../assets/banner-produtos.svg'

export const Container = styled.div`
  background: url(${Background});
  min-height: calc(100vh - 72px);
`

export const ProductsImg = styled.div`
  width: 100%;
  height: 550px;
  background: url(${BannerProducts}) center/cover no-repeat #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-left: 500px;
  h1 {
    width: 387.47px;
    height: 207px;
    font-size: 96.26px;
    line-height: 65.94px;
    text-align: center;
    font-family: 'Road Rage', sans-serif;
    font-weight: 400;
    color: #ffff;
  }
  p {
    font-family: 'Courier New', Courier, monospace;
    color: #ffff;
  }
`

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 40px;
  justify-items: center;
  margin-top: 20px;
`

export const CategoryNames = styled.div`
  font-family: 'Road Rage', sans-serif;
  color: #61a120;
  font-size: 50px;
  line-height: 48px;
  font-weight: 400;
  text-align: center;
  padding-top: 30px;
`

export const Line = styled.div`
  border-bottom: 3px solid #9758a6;
  width: 2%;
  height: 50%;
  text-align: center;
`
