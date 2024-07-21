import styled from 'styled-components'

import Backgraund from '../../assets/image.png'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('${Backgraund}') center/cover no-repeat;
  background-size: cover;
`

export const LoginImage = styled.img`
  height: 70%;
`
export const ContainerItens = styled.div`
  background-color: #373737;
  border-radius: 0 10px 10px 0;
  height: 70%;
  padding: 25px 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-style: normal;
    color: #fff;
    font-size: 24px;
    font-weight: 500;
    text-align: center;
    margin-top: 19px;
  }

  img {
    margin-top: 56px;
    max-width: 260px;
    max-height: 94px;
    margin-left: 70px;
  }
`

export const Label = styled.p`
  font-style: normal;
  color: #fff;
  font-size: 13px;
  line-height: 14.06px;
  font-weight: 500;
  margin-top: ${props => (props.error ? '12px' : '19px')};
  margin-bottom: 5px;
`

export const Input = styled.input`
  width: 391.42px;
  height: 38.32px;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border-radius: 5px;
  border: ${props => (props.error ? '2px solid #cc1717' : 'none')};
  padding-left: 10px;
`

export const SignInLink = styled.p`
  font-style: normal;
  font-weight: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;

  a {
    cursor: pointer;
    text-decoration: underline;
    color: #ffffff;
  }
`
export const ErrorMenssage = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #cc1717;
  margin-top: 2px;
`
