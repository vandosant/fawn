import { ADD_ENTITY } from '../constants/ActionTypes';

function cmsAppState(state = [], action) {
  switch (action.type) {
    case ADD_ENTITY:
      return [
        ...state, {
          id: action.id,
          text: action.text
        }
      ];
    default:
      return state;
  }
}

import expect from 'expect';
import deepFreeze from 'deep-freeze';

const testAddEntity = () => {
  const stateBefore = [];
  const action = {
    type: ADD_ENTITY,
    id: 0,
    text: 'Cms String'
  };
  const stateAfter = [
    {
      id: 0,
      text: 'Cms String'
    }
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(
    cmsAppState(stateBefore, action)
  ).toEqual(stateAfter);
  console.log('Passed!');
};

testAddEntity();
export default cmsAppState;
