import * as $ from 'jquery'
import io from 'socket.io-client'

import { observable } from 'mobx'

export class RoomService {
	@observable rooms = [];
	@observable room = undefined;

	@observable liveUpdate = false;

	@observable noNetworkConnection = false;

	@observable players = [];
	
	liveUpdateRooms() {
		this.getRooms();

		if (this.noNetworkConnection) {
			this.liveUpdate = false;
		}

		this.liveUpdate = true;

		function update() {
			setTimeout(() => {
				if (this.liveUpdate) {

					this.getRooms();

					update();
				}
			}, 5000)
		}

		update();
	}
	
	getRooms() {
		$.ajax({
			method: "GET", url: "/api/get-rooms"
		})
			.done(rooms => {
				this.rooms = rooms;
			})
			.fail(() => {
				this.noNetworkConnection = true;
			})
	}
}