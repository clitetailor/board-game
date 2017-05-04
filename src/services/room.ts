/// <reference types="socket.io-client" />


import * as $ from 'jquery'
import * as io from 'socket.io-client'

import { observable } from 'mobx'

interface Player {
	_id: number,
	username: string,
	level: number
}

interface Room {
	_id?: string,
	title?: string,
	maxPlayers?: number,
	players?: Player[]
}

export class RoomService {
	@observable rooms: Room[] = [];
	@observable room: Room = undefined;

	@observable liveUpdate = false;

	@observable noNetworkConnection = false;

	@observable socket: SocketIOClient.Socket = undefined;
	
	@observable gameover: boolean = false;

	connect() {
		if (this.socket && this.socket.connected) {
			return;
		}

		this.socket = io('http://localhost:9000');

		console.log(localStorage.getItem('authToken'));

		this.socket.on('connect', () => {

			this.socket.emit('authenticate', { token: localStorage.getItem('authToken') })
				.on('authenticated', () => {
					console.log('authenticated')
				})
				.on('unauthorized', (msg) => {
					console.log("unauthorized: " + JSON.stringify(msg.data));
					throw new Error(msg.data.type);
				})

			this.socket.on('new-room-created', room => {
				if (!this.room) {
					this.room = room;
				}
			})

			this.socket.on('approved', room => {

				console.log('what')
				if (!this.room) {
					this.room = room;
					this.gameover = false;
					this.socket.emit('join-room');
				}
			})

			this.socket.on('game-over', () => {
				this.room = undefined;
				this.gameover = true;
			})
		})

	}

	isConnected() {
		return this.socket && this.socket.connected;
	}
	
	liveUpdateRooms() {
		this.getRooms();

		if (this.noNetworkConnection) {
			this.liveUpdate = false;
		}

		this.liveUpdate = true;

		let update = () => {
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

	createNewRoom(room: Room) {
		if (this.isConnected()) {
			this.socket.emit('create-new-room', room);
		}
	}

	joinRoom(room: Room) {
		if (this.isConnected()) {
			this.socket.emit('request-join-room', room);
		}
	}

	play(id: number) {
		if (this.isConnected()) {
			this.socket.emit('play', id);
		}
	}
}