import * as React from 'react'
import { Link } from 'react-router-dom'
import { LargeButton, LargeInput, Card } from './cmp'
import { Redirect } from 'react-router-dom'
import * as styles from './room.styl'

import { observer } from 'mobx-react'
import { IAppProps } from './app'

import * as icon from '../assets/logo.svg'

@observer
export class Room extends React.Component<IAppProps, any> {
	constructor(props) {
		super(props);

		this.props.roomService.gameover = false;

		this.state = {
			
		}
	}

	play(id: number) {
		this.props.roomService.play(id);
	}

	render() {
		if (this.props.roomService.gameover) {
			return (
				<div className="room">
					<Redirect to="entrance"></Redirect>
				</div>
			)
		}

		return (
			<div className="room">
				<div className="players">
					{this.props.roomService.room.players.map(player =>
						(
							<Card className="player">
								<div className="username">username</div>
							</Card>
						))}
				</div>
			</div>
		)
	}
}

export default Room;