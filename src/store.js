import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createAtomicReducer, atomicThunk, createStateModifier } from 'redux-atomic-action'

const rooms = [];

const initialState = { rooms }

function defaultReducer(state, action) {

}

export const store = createStore(
	createAtomicReducer(initialState, defaultReducer),
	applyMiddleware(atomicThunk)
)