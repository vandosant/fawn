import { ADD_ENTITY, TOGGLE_ENTITY} from '../constants/ActionTypes';

export function addEntity(settings, text, id) {
  return {type: ADD_ENTITY, settings, text, id};
}

export function toggleEntity(settings, id) {
  return {type: TOGGLE_ENTITY, settings, id};
}
