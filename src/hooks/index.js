import React from 'react'

import PropTypes from 'prop-types'

import { CardProvider } from './CardContext'
import { UserProvider } from './UserContext'

const AppProvider = ({ children }) => (
  <UserProvider>
    <CardProvider>{children}</CardProvider>
  </UserProvider>
)

AppProvider.propTypes = {
  children: PropTypes.node
}

export default AppProvider
