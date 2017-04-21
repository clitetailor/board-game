import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createAtomicReducer, atomicThunk, createStateModifier } from 'redux-atomic-action'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader';

import { Bundle } from './bundle'
import { App } from './app/app'
import { Entrance } from './app/entrance'
import { Signup } from './app/signup'
import { Room } from './app/room'
import { Game } from './app/game'
import './index.html'
import './index.css'
import './assets/favicon.ico'

import { store } from './store'
import immuPolyfill from 'immu-func/polyfill'

immuPolyfill.all();

const routing = [
	{ exact: true, path: '/', component: App },
	{ path: '/entrance', component: Entrance },
	{ path: '/rooms', component: Room },
	{ path: '/game', component: Game },
	{ path: '/signup', component: Signup }
]

const render = (App) => {
	ReactDOM.render(
		<AppContainer>
			<Provider store={store}>

					<Router><div>
						{routing.map(route => (
							<Route
								key={route.path}
								exact={route.exact}
								path={route.path}
								component={route.component}
							/>
						))}
					</div></Router>

			</Provider>
		</AppContainer>,
		document.getElementById('root')
	);
};

render(App);