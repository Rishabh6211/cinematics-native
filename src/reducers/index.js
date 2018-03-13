import {combineReducers} from 'redux';
import moviesReducer from './movies';

const allReducer = combineReducers({
	now_Playing:moviesReducer
	
})

export default allReducer;