import { ADD_ENTITY } from '../constants/ActionTypes';

export function addEntity(settings) {
  return {type: ADD_ENTITY, settings};
}
