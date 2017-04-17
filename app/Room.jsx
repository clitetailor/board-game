import React, { Component } from 'react'
import { LargeButton, NavBar } from './cmp'
import styles from './Room.styl'

export default class Room extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="Room">
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