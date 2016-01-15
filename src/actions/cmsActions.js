import { ADD_ENTITY, TOGGLE_ENTITY} from '../constants/ActionTypes';

export function addEntity(settings) {
  return {type: ADD_ENTITY, settings};
}

export function toggleEntity(settings) {
  return {type: TOGGLE_ENTITY, settings};
}
