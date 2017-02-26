import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { LargeInput, LargeButton } from './components';
import './assets/favicon.ico';
import './index.styl';
import './entrance.html';
import './Entrance.styl';

class Entrance extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="Entrance">
				
				<nav className="navbar">
					<div className="brand">
						<div className="brand-typo">
							Chess.io
						</div>
					</div>
				</nav>

				<div className="outer-wrapper">
					<div className="content">
						
						<div className="top-control">
							<LargeInput
								type="input" name="search-box"
								label="search"
							/>
							<LargeButton>NEW</LargeButton>
						</div>
						
						<div className="pallete">
							<div className="rooms">
								<div className="card room">
									<div className="room-title">

									</div>
								</div>
							</div>

							<div className="info">
								<div className="card create-a-new-room">
									{/*TODO: Create a new room*/}
								</div>

								<div className="card dashboard">
									{/*TODO: Dashboard*/}
								</div>
							</div>
						</div>

					</div>
				</div>

			</div>
		)
	}
}

ReactDOM.render(
	<Entrance />,
	document.getElementById('root')
)