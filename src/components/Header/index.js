import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

import CartLogo from '../../assets/carrinho.svg'
import Logo from '../../assets/logo.svg'
import PersonLogo from '../../assets/person.svg'
import { useUser } from '../../hooks/UserContext'
import {
  Container,
  ContainerLeft,
  ContainerLogo,
  ContainerRigth,
  ContainerText,
  Line,
  MenorLine,
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
        <ContainerLogo>
          <img src={Logo} alt="logo code burguer" />
        </ContainerLogo>
        <PageLink onClick={() => push('/')} isActive={pathname === '/'}>
          Home
        </PageLink>
        <MenorLine></MenorLine>
        <PageLink>Contatos</PageLink>
        <MenorLine></MenorLine>
        <PageLink
          onClick={() => push('/produtos')}
          isActive={pathname.includes('/produtos')}
        >
          Cardápio
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
