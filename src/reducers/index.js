// Runs on startup.
// Needs at least some value.  Cannot be undefined, but can be null or an empty string/array.

import { combineReducers } from 'redux';
import CityReducer from './CityReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
    cities: CityReducer,
    selectedCityId: SelectionReducer
});
