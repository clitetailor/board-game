import React, { Component } from 'react';
import './Entrance.styl';

class Entrance extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="Entrance">
				<div className="fluid-container">
					<nav className="bg-navbar">
						<button className="bg-button">Back</button>
						<div className="bg-nav-right">
							{/*TODO: Login icon component*/}
						</div>
					</nav>

					<div className="row">
						<div className="col-lg-6">
							{/*TODO: List of rooms*/}
						</div>
						<div className="col-lg-6">
							<div className="row">
								{/*TODO: Create a new room*/}
							</div>

							<div className="row">
								{/*TODO: Dashboard*/}
							</div>
							
							<div className="row">
								{/*TODO: Find room*/}
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Entrance;