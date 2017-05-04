import * as $ from 'jquery'
import { observable } from 'mobx'

export class AuthService {
	@observable authenticated : boolean = false;
	@observable authenticateFailed : string = undefined;

	getHeaders() {
		const token = localStorage.getItem('authToken') || null;
		return { 'Authorization': `Bearer ${token}` }
	}

	_authenticated(token) {
		localStorage.setItem('authToken', token || null);
		console.log(localStorage.getItem('authToken'))
		this.authenticated = true;
	}

	_authenticateFailed(error) {
		switch (error.status) {
			case 401: {
				this.authenticateFailed = 'Invalid username or password';
				break;
			}

			case 409: {
				this.authenticateFailed = 'Username already exists';
				break;
			}

			case 500: {
				this.authenticateFailed = 'Something has broken';
				break;
			}
		}
	}

	login(username, password) {
		console.log(username, password)

		$.ajax({
			type: "POST", url: "/login",
			data: { username, password }
		})
			.done(token => {
				this._authenticated(token);
			})
			.fail(error => {
				this._authenticateFailed(error);
			})
	}

	signup(username, password) {
		$.ajax({
			type: "POST", url: "/signup",
			data: { username, password }
		})
			.done(token => {
				this._authenticated(token);
			})
			.fail(error => {
				this._authenticateFailed(error);
			});
	}
}