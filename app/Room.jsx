import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { LargeButton, NavBar } from './cmp'
import './assets/favicon.ico'
import './Room.html'
import style from './Room.styl'

class Room extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={style.Room}>
				<NavBar />

				<div className="outer-wrapper">
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
			</div>
		)
	}
}

ReactDOM.render(
	<Room />,
	document.getElementById('root')
)