import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import PrivateRoute from './hoc/PrivateRoute'
import PublicRoute from './hoc/PublicRoute'
import DashboardPage from './container/DashboardPage'
import ItemPage from './container/ItemPage'
import LoginPage from './container/LoginPage'
import VendorPage from './container/VendorPage/index'
import CustomerPage from './container/CustomerPage'
import LossAndDamage from './container/LossAndDamage'
import PurchasePage from './container/PurchasePage'
import PurchaseReturnPage from './container/PurchaseReturnPage'
import SalesPage from './container/SalesPage'
import SalesReturnPage from './container/SalesReturnPage'
import Stock from './container/Stock'
import Rack from './container/Rack'
import SingleItem from './container/SinglePage/SingleItem'
import SingleVendor from './container/VendorPage/SingleVendor'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <PublicRoute path="/login" exact component={LoginPage} />
          <PrivateRoute path="/" exact component={DashboardPage} />
          <PrivateRoute path="/item" exact component={ItemPage} />
          <PrivateRoute path="/vendor" exact component={VendorPage} />
          <PrivateRoute path="/loss-damage" exact component={LossAndDamage} />
          <PrivateRoute path="/customer" exact component={CustomerPage} />
          <PrivateRoute path="/purchase" exact component={PurchasePage} />
          <PrivateRoute path="/sales" exact component={SalesPage} />
          <PrivateRoute path="/stock" exact component={Stock} />
          <PrivateRoute path="/rack" exact component={Rack} />
          {/* <PrivateRoute path="/single-item" exact component={SingleItem} /> */}
          <PrivateRoute path="/single-item/:id" exact component={SingleItem} />
          <PrivateRoute
            path="/single-vendor/:id"
            exact
            component={SingleVendor}
          />
          <PrivateRoute
            path="/sales-return"
            exact
            component={SalesReturnPage}
          />
          <PrivateRoute
            path="/purchase-return"
            exact
            component={PurchaseReturnPage}
          />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
