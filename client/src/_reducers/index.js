/**
 * Created by Mohan Vamsi on 3/6/2019.
 */

import { combineReducers } from 'redux';

import { teamsListReducer } from './teamsListReducers';

const rootReducer = combineReducers({
    teamsListReducer,
});

export default rootReducer;
