import React, { Component } from 'react'
import { LargeButton, LargeInput, Dialog, Card } from './cmp'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import styles from './entrance.styl'

class Entrance extends Component {
	constructor(props) {
		super(props);

		this.state = {
			rooms: [{
				_id: "31234132",
				title: "Are you dare?"
			}]
		}
	}

	render() {
		return (
			<div className="entrance">
				<Dialog/>

				<div className="outer-wrapper">
					<LargeInput
						type="input"
						label="search-box"
						className="search-box"
					/>

					<LargeButton className="new-room-button">New</LargeButton>

					<div className="rooms">
						{this.state.rooms.map(room => 
							<Card
								key={room._id}
								className="room"
							>
								<div className="line">
									<h3 className="id">#{room._id}</h3>
									
									<h3 className="title">
										{room.title}
									</h3>

									<Link to={`/rooms/${room._id}`}>
										<LargeButton>join</LargeButton>
									</Link>
								</div>
							</Card>
						)}
					</div>
				</div>
			</div>
		)
	}
}

Entrance = withRouter(connect(state => state)(Entrance))

export { Entrance }