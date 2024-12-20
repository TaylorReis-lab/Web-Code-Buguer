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

export const CategoryText = styled.div`
  h1 {
    font-size: 32px;
    color: #61a120;
    line-height: 48px;
    font-weight: 800;
  }
`
export const Line = styled.div`
  height: 4px;
  width: 57px;
  border-bottom: 4px solid #61a120;
`

export const H1 = styled.p``

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  width: 260px;
  height: 219px;
  border-radius: 28.48px;

  p {
    font-size: 18px;
    font-weight: bold;
    line-height: 120%;
    color: #424242;
    margin-top: 8px;
  }
`

export const ContainerOffert = styled.div`
  display: flex;
  flex-direction: column;
`
export const NameItem = styled.p``

export const Img = styled.img`
  width: 200px;
  border-radius: 10px;
`

export const Button = styled.button`
  height: 50px;
  border: none;
  font-size: 18px;
  margin-top: 16px;
  line-height: 100%;
  font-weight: bold;
  background-color: #9758a6;
  color: #ffffff;
  border-radius: 7.78px;
  align-items: center;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
`
