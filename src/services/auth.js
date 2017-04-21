export function authenticate(socket, token) {
	return socket.emit('authenticate', { token })
		.on('authenticated', () => {

		})
		.on('unauthorized', (msg) => {
			console.log("unauthorized: " + JSON.stringify(msg.data));
			throw new Error(msg.data.type);
		})
}