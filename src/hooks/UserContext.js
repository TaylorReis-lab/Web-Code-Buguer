import React, { createContext, useContext, useEffect, useState } from 'react'

import PropTypes from 'prop-types'

const UserContext = createContext({})

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({})

  const putUserData = async userInfo => {
    setUserData(userInfo)

    await localStorage.setItem('codebuguer:userData', JSON.stringify(userInfo))
  }

  const loguot = async () => {
    await localStorage.removeItem('codebuguer:userData')
  }

  useEffect(() => {
    const loadUserData = async () => {
      const clientInfo = await localStorage.getItem('codebuguer:userData')
      if (clientInfo) {
        setUserData(JSON.parse(clientInfo))
      }
    }
    loadUserData()
  }, [])
  return (
    <UserContext.Provider value={{ putUserData, userData, loguot }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUser most be used with UserContext')
  }

  return context
}

UserProvider.propTypes = {
  children: PropTypes.node
}
