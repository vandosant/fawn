import { ADD_ENTITY } from '../constants/ActionTypes';

function cmsAppState(state = [], action) {
  switch (action.type) {
    case ADD_ENTITY:
      return [
        ...state, {
          id: action.id,
          text: action.text,
          published: action.published
        }
      ];
    case 'TOGGLE_ENTITY':
      return state.map(entity => {
        if (entity.id !== action.id) {
          return entity;
        }
        return {
          ...entity,
          published: !entity.published
        };
      });
    default:
      return state;
  }
}
export default cmsAppState;

import expect from 'expect';
import deepFreeze from 'deep-freeze';

const testAddEntity = () => {
  const stateBefore = [];
  const action = {
    type: ADD_ENTITY,
    id: 0,
    text: 'Cms String',
    published: false
  };
  const stateAfter = [
    {
      id: 0,
      text: 'Cms String',
      published: false
    }
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(
    cmsAppState(stateBefore, action)
  ).toEqual(stateAfter);
};

const testToggleEntity = () => {
  const stateBefore = [
    {
      id: 0,
      text: 'Some entity',
      published: false
    },
    {
      id: 1,
      text: 'Another entity',
      published: false
    }
  ];
  const action = {
    type: 'TOGGLE_ENTITY',
    id: 1
  };
  const stateAfter = [
    {
      id: 0,
      text: 'Some entity',
      published: false
    },
    {
      id: 1,
      text: 'Another entity',
      published: true
    }
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(
    cmsAppState(stateBefore, action)
  ).toEqual(stateAfter);
};

testAddEntity();
testToggleEntity();
console.log('Passed!');
