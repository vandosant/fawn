import { combineReducers } from 'redux';
import fuelSavingsAppState from './fuelSavings';
import {cmsAppState, visibilityFilter} from './cms.js';

const rootReducer = combineReducers({
  fuelSavingsAppState,
  cmsAppState,
  visibilityFilter
});

export default rootReducer;
