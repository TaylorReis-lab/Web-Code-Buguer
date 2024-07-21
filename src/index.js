/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom'
import { ToastContainer } from 'react-toastify'

// eslint-disable-next-line no-unused-vars
// import Login from './containers/login'
import Routes from '../src/routes/routes'
import AppProvaider from './hooks'
import Globalstyles from './styles/globalstyles'

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <>
    <AppProvaider>
      <Routes />
    </AppProvaider>
    <ToastContainer autoClose={3000} theme="colored" />
    <Globalstyles />
  </>,

  document.getElementById('root')
)
