import styled from 'styled-components'

export const Container = styled.div`
  height: 72px;
  background-color: rgba(31, 31, 31, 1);
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
`

export const ContainerLeft = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  margin-right: 320px;
`

export const ContainerRigth = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 150px;
  img {
    width: 100px;
  }
`

export const ContainerText = styled.div`
  p {
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    color: #ffffff;
  }
`

export const PageLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${props => (props.isActive ? '#9758a6' : '#ffffff')};
  font-size: 16px;
  line-height: 19px;
  font-weight: ${props => (props.isActive ? 'bold' : 'normal')};
`

export const MenorLine = styled.div`
  height: 20px;
  border-right: 1px solid rgba(98, 94, 94, 1);
`

export const Line = styled.div`
  height: 40px;
  border-right: 0.5px solid rgba(98, 94, 94, 1);
`
export const PageLinkExit = styled.a`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  cursor: pointer;

  color: #9e1c00;
`
