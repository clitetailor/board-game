import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import './assets/favicon.ico'
import './Login.html'
import style from './Login.styl'

class Login extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={style.Login}>
				
			</div>
		)
	}

	login() {

	}
}

ReactDOM.render(
	<Login />,
	document.getElementById('root')
)