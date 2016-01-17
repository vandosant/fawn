import { combineReducers } from 'redux';
import fuelSavingsAppState from './fuelSavings';
import cmsAppState from './cms.js';

const rootReducer = combineReducers({
  fuelSavingsAppState: fuelSavingsAppState,
  cmsAppState: cmsAppState
});

export default rootReducer;
