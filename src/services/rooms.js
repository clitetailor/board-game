import * as $ from 'jquery'
import io from 'socket.io-client'

const ERROR = state => state.assign({ err })

export function getRooms() {
	return new Promise((resolve, reject) => {

		$.ajax({
			type: "GET",
			url: "/rooms"
		})
			.done(resolve)
			.err(reject);
	})
}


export function newRoom(socket, room) {

	return new Promise((resolve, reject) => {
		$.ajax({
			type: "POST",
			url: "/rooms"
		})
			.done(resolve)
			.err(reject)
	})
}


export function leaveTheRoom() {
	return new Promise((resolve, reject) => {
		$.ajax({
			type: "PUT",
			url: "/rooms",
			data: data
		})
			.done(resolve)
			.err(reject)
	})
}

export function connect() {
	const socket = io.connect('http://localhost')

	return new Promise(resolve => {
		socket.on('connect', () => {
			resolve(socket);
		})
	})
}
