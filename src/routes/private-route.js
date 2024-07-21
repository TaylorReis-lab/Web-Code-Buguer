import React from 'react'
import { Redirect, Route } from 'react-router-dom'

import PropTypes from 'prop-types'

import { Header } from '../components'

function PrivateRoute({ component, ...rest }) {
  const user = localStorage.getItem('codebuguer:userData')

  if (!user) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <Header />
      <Route {...rest} component={component} />
    </>
  )
}

export default PrivateRoute

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}
