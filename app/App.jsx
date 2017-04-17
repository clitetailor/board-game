import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { LargeInput, LargeButton } from './cmp'
import * as $ from 'jquery'
import image from './assets/chess.jpg'
import styles from './App.styl'
import history from './history'

import { store, todos } from './index'
import { name } from 'redux-atomic-action'

function addTodo(todo) {
	return name(state => { state = Object.assign({}, state); state.todos = state.todos.concat(['something']); return state;}, "ADD_TODO");
}

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			login: false
		}
	}

	render() {
		if (this.state.login) {
			return (
				<Redirect push to={{
					pathname: '/entrance'
				}}/>
			)
		}

		return (
			<div className="App">
				<div className="outer-wrapper">
					<nav className="navbar">
						<div className="brand-icon">Chess.io</div>
					</nav>

					<div className="login-form">
						<form action="" method="POST" onSubmit={(e) => { this.login(e) }}>
							<LargeInput
								className="large-input"	
								label="username" name="username"
								type="input"
								ref={(input) => { this.usernameInput = input }}
							/>
							<LargeInput
								className="large-input"	
								label="password" name="password"
								type="password" ref={(input) => { this.passwordInput = input }}
							/>

							<div className="button-group">
								<LargeButton type="submit">
									Login
								</LargeButton>
								<a href="./signup">
									<LargeButton>Sign Up</LargeButton>
								</a>
								<LargeButton onClick={() => { this.addTodo() }}>Add Todo</LargeButton>
							</div>
						</form>
					</div>
				</div>

				<div className="background">
					<img
						src={image} alt="chess"
						className="background-image"
					/>
				</div>
			</div>
		)
	}

	addTodo() {
		store.dispatch(addTodo('something'))
	}

	login(e) {
		e.preventDefault();

		let data = {
			username: this.usernameInput.value,
			password: this.passwordInput.value
		}

		let request = $.ajax({
			type: 'POST',
			url: '/login',
			data: JSON.stringify(data),
			contentType: 'application/json; charset=utf-8'
		})

		request.done(data => {
			history.push('/entrance')
		})

		request.fail(err => {

		})
	}

	signUp() {

	}
}