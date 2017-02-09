import { createStore } from 'redux';
export * from './loginReducer';

export let store = createStore(loginReducer);