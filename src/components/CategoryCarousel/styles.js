import { Link } from 'react-router-dom'

import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  padding: 35px 0;
  .rec.rec-arrow {
    background-color: #9758a6;
    color: #efefef;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  .rec.rec-arrow:hover {
    border: 2px solid #9758a6;
    background-color: #efefef;
    color: #9758a6;
  }

  .rec.rec-arrow:disabled {
    border: none;
    background-color: #bebebf;
    color: #efefef;
  }
`

export const Line = styled.div`
  height: 4px;
  width: 57px;
  border-bottom: 4px solid #9758a6;
`

export const CategoryText = styled.div`
  h1 {
    font-size: 32px;
    color: #9758a6;
    line-height: 48px;
    font-weight: 800;
  }
`

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
`

export const ContainerOffert = styled.div`
  display: flex;
  flex-direction: column;
`

export const Img = styled.img`
  width: 200px;
  border-radius: 10px;
`

export const Button = styled(Link)`
  height: 50px;
  border: none;
  font-size: 18px;
  margin-top: 16px;
  line-height: 100%;
  font-weight: bold;
  background-color: #9758a6;
  color: #ffffff;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
`
