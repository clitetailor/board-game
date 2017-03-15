import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './assets/favicon.ico'
import './GamePlay.html'
import style from './GamePlay.styl'

class GamePlay extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={style.GamePlay}>
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

ReactDOM.render(
	<GamePlay />,
	document.getElementById('root')
)