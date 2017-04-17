import { Route, Router } from 'react-router-dom'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import history from './history'
import { Provider } from 'react-redux'
import loadApp from 'bundle-loader?lazy!./App'
import loadEntrance from 'bundle-loader?lazy!./Entrance'
import loadGamePlay from 'bundle-loader?lazy!./GamePlay'
import loadLogin from 'bundle-loader?lazy!./Login'
import loadRoom from 'bundle-loader?lazy!./Room'
import loadSignUp from 'bundle-loader?lazy!./SignUp'
import loadNoMatch from 'bundle-loader?lazy!./NoMatch'
import './index.html'
import './index.css'

import { createAtomicReducer, atomicThunk, createStateModifier } from 'redux-atomic-action'
import { createStore, applyMiddleware } from 'redux'

import { AppContainer } from 'react-hot-loader';


let initialState = {
	todos: []
}


export let todos = createStateModifier('todos');


export let store = createStore(
	createAtomicReducer(initialState),
	applyMiddleware(atomicThunk)
)


class Bundle extends Component {
	constructor(props) {
		super(props);

		this.state = {
			mod: null
		}
	}

	componentWillMount() {
		this.load(this.props)
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.load !== this.props.load) {
			this.load(nextProps)
		}
	}

	load(props) {
		this.setState({
			mod: null
		})
		props.load((mod) => {
			this.setState({
				// handle both es imports and cjs
				mod: mod.default ? mod.default : mod
			})
		})
	}

	render() {
		return this.state.mod
			? this.props.children(this.state.mod)
			: <div>loading</div>
	}
}


let routing = [
	{ path: '/', load: loadApp },
	{ path: '/entrance', load: loadEntrance },
	{ path: '/gameplay', load: loadGamePlay },
	{ path: '/signup', load: loadSignUp },
	{ path: '/room/:id', load: loadRoom }
]

ReactDOM.render(
	<AppContainer>
		<Router
			history={history}
		>
			<div>
				{routing.map(route =>
					<Route key={route.path} exact path={route.path}
						render={rest =>
							<Bundle load={route.load}>
								{(Comp) => <Comp/>}
							</Bundle>
						}
					/>
				)}
			</div>
		</Router>
	</AppContainer>,
	document.getElementById('root')
)