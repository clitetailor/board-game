/// <reference path="./typings.d.ts" />


import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import * as immuPolyfill from 'immu-func/polyfill'

immuPolyfill.all();

import { AuthService } from './services/auth'
import { RoomService } from './services/room'

import { Bundle } from './bundle'
import { App } from './app/app'
import { Entrance } from './app/entrance'
import { Signup } from './app/signup'
import { Room } from './app/room'
import { Game } from './app/game'
import './index.html'
import './index.css'
import './assets/favicon.ico'

interface AppRoute {
	exact?: boolean,
	path: string,
	component: any
}

const authService = new AuthService();
const roomService = new RoomService();

const appRoutes: AppRoute[] = [
	{ exact: true, path: '/', component: App },
	{ path: '/entrance', component: Entrance },
	{ path: '/rooms', component: Room },
	{ path: '/game', component: Game },
	{ path: '/signup', component: Signup }
]

ReactDOM.render(
	<BrowserRouter><div>
		{appRoutes.map(({ component: Component, path, exact }) => (
			<Route
				exact key={path}
				path={path}
				render={() =>
					<Component auth={authService} roomService={roomService}></Component>}
			/>
		))}
	</div></BrowserRouter>,
	document.getElementById('root')
);