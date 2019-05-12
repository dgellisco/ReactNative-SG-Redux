import { combineReducers } from 'redux';
import CityReducer from './CityReducer';

export default combineReducers({
    cities: CityReducer
});

// console.log(store.getState());