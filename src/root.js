import React from 'react'

import App from './App'
import AbkariRang from './AbkariRang'
import Models from './models'
import Anbar from './Anbar'
import Insert from './Insert'
import anbarApp from './reducers'
import Groups from './Groups'
import GroupBox from './Groups/GroupBox'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import logger from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import './style.css'
const middleware = applyMiddleware(logger(), promiseMiddleware())
// const middleware = applyMiddleware(promiseMiddleware())
let store = createStore(anbarApp, middleware)

export default () => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Anbar} />
        <Route path="anbar" component={Anbar}/>
        <Route path="vizhegi" component={AbkariRang}/>
        <Route path="models" component={Models}/>
        <Route path="insert" component={Insert}/>
        <Route path="groups" component={Groups}/>
        <Route path="groups/:id" component={GroupBox}/>
      </Route>
    </Router>
  </Provider>
)
