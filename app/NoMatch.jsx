import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import './assets/favicon.ico'
import './NoMatch.html'
import style from './NoMatch.styl'

class NoMatch extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="NoMatch">

			</div>
		)
	}
}

ReactDOM.render(
	<NoMatch />,
	document.getElementById('root')
)