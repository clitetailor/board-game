import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { LargeButton, NavBar } from './cmp'
import './assets/favicon.ico'
import './Room.styl'
import './Room.html'
import './index.styl'

class Room extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="Room">
				<NavBar />

				<nav className="navbar">
					{/*TODO: Login icon component*/}
				</nav>

				<div className="players">
					{/*TODO: List of players*/}
				</div>

				<div className="chatbox">
					{/*TODO: Chat box component*/}
				</div>

				<div className="action">
					<LargeButton>Invite</LargeButton>
					<LargeButton>Ready</LargeButton>
				</div>
			</div>
		)
	}
}

ReactDOM.render(
	<Room />,
	document.getElementById('root')
)