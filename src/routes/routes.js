import React from 'react'
import {
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom/cjs/react-router-dom.min'

import { Home, Login, Products, SingUP, Cart, Admin } from '../containers'
import PrivateRoute from './private-route'

function Routes() {
  return (
    <Router>
      <Switch>
        <Route component={Login} path="/login" />
        <Route component={SingUP} path="/SingUP" />
        <PrivateRoute exact component={Home} path="/" />
        <PrivateRoute component={Products} path="/Produtos" />
        <PrivateRoute component={Cart} path="/carrinho" />
        <PrivateRoute component={Admin} path="/pedidos" />
      </Switch>
    </Router>
  )
}

export default Routes
