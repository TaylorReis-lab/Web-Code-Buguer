import styled from 'styled-components'

import Backgraund from '../../assets/background.svg'
import BannerHome from '../../assets/banner-home.svg'

export const Container = styled.div`
  background-image: url(${Backgraund});
  background-color: rgba(0, 0, 0, 15%);
`

export const HomeImg = styled.div`
  width: 100%;
  height: 550px;
  background: url(${BannerHome}) center/cover no-repeat #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-left: 700px;
  h1 {
    width: 460px;
    padding-bottom: 20px;
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
