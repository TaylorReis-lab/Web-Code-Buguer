import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

import CartLogo from '../../assets/carrinho.svg'
import PersonLogo from '../../assets/person.svg'
import { useUser } from '../../hooks/UserContext'
import {
  Container,
  ContainerLeft,
  ContainerRigth,
  ContainerText,
  Line,
  PageLink,
  PageLinkExit
} from './styles'

export function Header() {
  const {
    push,
    location: { pathname }
  } = useHistory()

  const { loguot, userData } = useUser()
  const loguotUser = () => {
    loguot()
    push('/login')
  }
  return (
    <Container>
      <ContainerLeft>
        <PageLink onClick={() => push('/')} isActive={pathname === '/'}>
          Home
        </PageLink>
        <PageLink
          onClick={() => push('/produtos')}
          isActive={pathname.includes('/produtos')}
        >
          Ver produtos
        </PageLink>
      </ContainerLeft>
      <ContainerRigth>
        <PageLink onClick={() => push('/carrinho')}>
          <img src={CartLogo} alt="logo-carrinho" />
        </PageLink>
        <Line></Line>
        <PageLink>
          <img src={PersonLogo} alt="logo-carrinho" />
        </PageLink>
        <ContainerText>
          <p>Olá, {userData.name}</p>
          <PageLinkExit onClick={loguotUser}>Sair</PageLinkExit>
        </ContainerText>
      </ContainerRigth>
    </Container>
  )
}
