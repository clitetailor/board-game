import './index.js'
import './room.html'

import React, { Component } from 'react';
import './Room.styl';

class Room extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="Room">
				<nav className="bg-navbar">
					{/*TODO: Login icon component*/}
				</nav>

				<div className="bg-players">
					{/*TODO: List of players*/}
				</div>

				<div className="bg-chat-box">
					{/*TODO: Chat box component*/}
				</div>

				<div className="bg-action">
					<button className="bg-button">Invite</button>
					<button className="bg-button">Ready</button>
				</div>
			</div>
		)
	}
}

ReactDOM.render(
	<Room />,
	document.getElementById('root')
)