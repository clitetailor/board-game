export function loginAction(username, password) {
	return {
		type: "LOGIN_ACTION",
		username,
		password
	}
}

export function loginReducer(state, action) {
	return state;
}