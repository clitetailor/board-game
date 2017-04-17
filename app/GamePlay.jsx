import React, { Component } from 'react'
import styles from './GamePlay.styl'


export default class GamePlay extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="GamePlay">
				<div className="main-game">
					<div>
						{/*TODO: Gameboard*/}
					</div>
				</div>

				<div className="chat-box">
					{/*TODO: Chat box component*/}
				</div>

				<div className="action">

				</div>
			</div>
		)
	}
}