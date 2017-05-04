import * as React from 'react'
import { LargeButton, LargeInput, Dialog, Card } from './cmp'
import { connect } from 'react-redux'
import { withRouter, Link, Redirect } from 'react-router-dom'
import * as styles from './entrance.styl'

import { observer } from 'mobx-react'

import { IAppProps } from './app'

@observer
export class Entrance extends React.Component<IAppProps, any> {
	rInput: LargeInput;
	pInput: LargeInput;

	componentWillMount() {
		this.props.roomService.connect();
		// this.props.roomService.liveUpdateRooms();
	}

	componentWillUnmount() {
		this.props.roomService.liveUpdate = false;
	}

	submitNewRoom() {
		this.props.roomService.createNewRoom({
			title: this.rInput.value,
			maxPlayers: this.pInput.value
		});
	}

	render() {
		if (this.props.roomService.room) {
			console.log('room')

			return (
				<div className="entrance">
					<Redirect
						to={`/rooms/${this.props.roomService.room._id}`}
						push={true}
					/>
				</div>
			)
		}

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
						action=""
						className="form"
						onSubmit={(e) => { e.preventDefault(); this.submitNewRoom() }}
					>
						<div className="line">
							<LargeInput
								ref={rInput => { this.rInput = rInput }}
								type="input"
								label="Room name"
								onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); this.submitNewRoom() } }}
							/>
						</div>
						<div className="line">
							<LargeInput
								ref={pInput => { this.pInput = pInput }}
								type="input"
								label="Max players"
								onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); this.submitNewRoom() } }}
							/>
						</div>
						<LargeButton type="submit">New</LargeButton>
					</form>
				</div>
			</div>
		)
	}
}

export default Entrance;