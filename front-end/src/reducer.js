import { combineReducers } from 'redux';
import searchForm from './reducers/searchForm';
import bars from './reducers/bars';
import location from './reducers/locations';
import ui from './reducers/ui';

export default combineReducers({ bars, location, searchForm, ui });