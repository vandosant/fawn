import { ADD_ENTITY, TOGGLE_ENTITY} from '../constants/ActionTypes';

export function addEntity(settings, text, id) {
  return {type: ADD_ENTITY, settings, text, id};
}

export function toggleEntity(settings, id) {
  return {type: TOGGLE_ENTITY, settings, id};
}

export function setVisibilityFilter(settings, filter) {
  return {type: 'SET_VISIBILITY_FILTER', settings, filter};
}
