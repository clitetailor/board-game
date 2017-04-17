import React, { Component } from 'react'
import { LargeInput, LargeButton, NavBar } from './cmp'
import styles from './Entrance.styl'

export default class Entrance extends Component {
	constructor(props) {
		super(props);

		this.state = {
			rooms: [{
				id: 1024323,
				name: "Something to eat"
			}, {
				id: 1024321,
				name: "Something to eat"
			}, {
				id: 1024322,
				name: "Something to eat"
			}, {
				id: 1024325,
				name: "Something to eat"
			}, {
				id: 1024326,
				name: "Something to eat"
			}, {
				id: 1024327,
				name: "Something to eat"
			}, {
				id: 1024328,
				name: "Something to eat"
			}, {
				id: 1024329,
				name: "Something to eat"
			}, {
				id: 1024331,
				name: "Something to eat"
			}, {
				id: 1024332,
				name: "Something to eat"
			}, {
				id: 1024333,
				name: "Something to eat"
			}, {
				id: 1024334,
				name: "Something to eat"
			}, {
				id: 1024335,
				name: "Something to eat"
			}, {
				id: 1024336,
				name: "Something to eat"
			}, {
				id: 1024337,
				name: "Something to eat"
			}]
		}
	}

	render() {
		return (
			<div className="Entrance">
				<NavBar />

				<div className="outer-wrapper">
					<div className="content">

						<div className="top-control">
							<div className="card">
								<LargeInput
									type="input" name="search-box"
									label="search"
								/>
								<LargeButton>SEARCH</LargeButton>
							</div>
						</div>

						<div className="pallete">
							<div className="rooms">
								{this.state.rooms.map((room) => {
									return (
										<div
											className="card"
											key={room.id}
										>
											<div className="banner">
												<div className="room-id">
													<h3><i>#{room.id}</i></h3>
												</div>

												<div className="room-title">
													<h3>{room.name}</h3>
												</div>
											</div>

											<div className="action">
												<LargeButton>JOIN</LargeButton>
											</div>
										</div>
									)
								})}
							</div>

							<div className="info">
								<div className="card">
									<LargeButton>NEW</LargeButton>
								</div>

								<div className="card">
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