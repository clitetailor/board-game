import * as React from 'react'
import { LargeButton, LargeInput, Dialog, Card } from './cmp'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import * as styles from './entrance.styl'

import { observer } from 'mobx-react'

@observer
class Entrance extends React.Component<any, any> {
	componentWillMount() {
		this.props.roomService.liveUpdateRooms();
	}

	componentWillUnmount() {
		this.props.roomService.liveUpdate = false;
	}

	submitNewRoom() {
		
	}

	render() {
		return (
			<div className="entrance">
				<Dialog />

				<div className="left">
					<LargeInput
						type="input"
						label="search-box"
						className="search-box"
					/>

					<div className="rooms">
						{this.props.roomService.rooms.map(room => 
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
				
				<div className="right">
					<form
						action="/"
						className="form"
						onSubmit={() => this.submitNewRoom()}
					>
						<div className="line">
							<LargeInput
								type="input"
								label="Room name"
							/>
						</div>
						<LargeButton>New</LargeButton>
					</form>
				</div>
			</div>
		)
	}
}

export { Entrance }