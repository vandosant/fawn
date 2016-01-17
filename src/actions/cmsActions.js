import { ADD_ENTITY, TOGGLE_ENTITY} from '../constants/ActionTypes';

export function addEntity(settings, text) {
  return {type: ADD_ENTITY, settings, text};
}

export function toggleEntity(settings) {
  return {type: TOGGLE_ENTITY, settings};
}
