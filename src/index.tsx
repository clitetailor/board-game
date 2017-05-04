/// <reference path="./typings.d.ts" />


import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import * as immuPolyfill from 'immu-func/polyfill'

immuPolyfill.all();

import { AuthService } from './services/auth'
import { RoomService } from './services/room'

import { Bundle } from './bundle'
import * as loadApp from 'bundle-loader?lazy&name=[name]!./app/app';
import * as loadEntrance from 'bundle-loader?lazy&name=[name]!./app/entrance';
import * as loadSignup from 'bundle-loader?lazy&name=[name]!./app/signup';
import * as loadRoom from 'bundle-loader?lazy&name=[name]!./app/game';
import './index.html'
import './index.css'
import './assets/favicon.ico'

interface AppRoute {
	exact?: boolean,
	path: string,
	lazyLoad: any
}

const authService = new AuthService();
const roomService = new RoomService();

const appRoutes: AppRoute[] = [
	{ exact: true, path: '/', lazyLoad: loadApp },
	{ path: '/entrance', lazyLoad: loadEntrance },
	{ path: '/rooms', lazyLoad: loadRoom },
	{ path: '/signup', lazyLoad: loadSignup }
]

ReactDOM.render(
	<BrowserRouter><div>
		{appRoutes.map(({ lazyLoad , path, exact }) => (
			<Route
				exact key={path}
				path={path}
				render={() =>
					<Bundle load={lazyLoad}>
						{Component => (
							<Component
								auth={authService}
								roomService={roomService}
							/>
						)}
					</Bundle>}
			/>
		))}
	</div></BrowserRouter>,
	document.getElementById('root')
);