import * as React from 'react'
import { Link } from 'react-router-dom'
import { LargeButton, LargeInput, Card } from './cmp'
import * as styles from './room.styl'

import { observer } from 'mobx-react'

import * as icon from '../assets/logo.svg'

@observer
export class Room extends React.Component<any, any> {
	playerPositions(length, render) {
		return Array.from({ length }, (v, k) => k)
			.map(k => k < this.props.roomService.players.length ?
				this.props.roomService.players[k] : null)
			.map(render);
	}

	render() {
		return (
			<div className="room">
				<div className="outer-wrapper">
					<div className="padding"></div>
					<div className="content">

						<div className="players">
							{this.playerPositions(2, (player, i) => {
								if (player) {
									return (
										<Card key={i} className="player">
											<div className="avatar">
												<img src={icon} alt="avatar" />
											</div>

											<div className="name">
												<h4>{player.name}</h4>
											</div>

											<div className="level">
												<h5><span className="hightlight">{player.level}</span></h5>
											</div>

											<div className="actions">
												<LargeButton
													className={[styles['eject'], i === 0 ? styles['invisible'] : ''].join(' ')}
												>
													Eject
												</LargeButton>
											</div>
										</Card>
									)
								} else {
									return (
										<Card key={i} className="player"></Card>
									)
								}
							})}
						</div>

						<div className="actions">
							<Link to="/game">
								<LargeButton className="start">Start</LargeButton>
							</Link>
						</div>

					</div>
					<div className="padding"></div>
				</div>					

				<div className="control">

				</div>
			</div>
		)
	}
}
