import '../scss/main.scss'

import React, { Component } from 'react'
import { Router, Route } from 'react-router-dom'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Test from './components/Test'
import { createStore } from 'redux'
import appState from './reducers'

const store = createStore(appState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

render (
	<Provider store={ store }>
		<Router history={History}>
			<div>	
				<Route exact path="/" component={ Test } />
			</div>
		</Router>
	</Provider>,
	document.getElementById('app')
)
