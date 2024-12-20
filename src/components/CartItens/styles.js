import styled from 'styled-components'

export const Container = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
  padding: 10px;
  width: max-content;
`

export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 15px;
  background-color: #333232;
  border-radius: 5px;
  width: 843px;
  p {
    font-size: 16px;
    color: #ffffff;
  }
`

export const ContainerCards = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 0.9fr);
  grid-gap: 10px 15px;
  padding: 10px;

  img {
    border-radius: 10px;
    width: 130px;
  }

  p {
    font-size: 16px;
    color: #000000;
  }

  .quantity-container {
    display: flex;
    gap: 20px;

    button {
      height: 30px;
      background: transparent;
      border: none;
      font-size: 24px;
      cursor: pointer;
    }

    p {
      margin-top: 5px;
    }
  }
`
export const EmptyCart = styled.p`
  padding: 20px;
  text-align: center;
  font-weight: bold;
`
