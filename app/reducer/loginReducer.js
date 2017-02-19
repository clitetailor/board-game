/**
 * Success loged in
 */
export function successLogedIn(content) {
	return {
		type: "SUCCESS_LOGED_IN",
		content
	}
}

export function loginFailed() {
	return {
		type: "LOGIN_FAILED"
	}
}

const initialState = {
	username: undefined,
	img: undefined,
	item: undefined,
}

export function loginReducer(state = initialState, action) {
	return state;
}