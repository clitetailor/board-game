import { createStore } from 'redux';
import { loginReducer } from './loginReducer';
export * from './loginReducer';

export let store = createStore(loginReducer);