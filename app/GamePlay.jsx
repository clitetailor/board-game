import './index.js'

import React, { Component } from 'react';
import "GamePlay.styl";

class GamePlay extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="GamePlay">
				<div className="bg-main-game">
					<div>
						{/*TODO: Gameboard*/}
					</div>
				</div>

				<div className="bg-chat-box">
					{/*TODO: Chat box component*/}
				</div>

				<div className="bg-action">
					
				</div>
			</div>
		)
	}
}

ReactDOM.render(
	<GamePlay />,
	document.getElementById('root')
)