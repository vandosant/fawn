import { ADD_ENTITY, TOGGLE_ENTITY, SET_VISIBILITY_FILTER } from '../constants/ActionTypes';

function entity(state, action) {
  switch (action.type) {
    case ADD_ENTITY:
      return {
        id: action.id,
        text: action.text,
        published: false
      };
    case TOGGLE_ENTITY:
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        published: !state.published
      };
  }
}

export function cmsAppState(state = [], action) {
  switch (action.type) {
    case ADD_ENTITY:
      return [
        ...state, entity(undefined, action)
      ];
    case TOGGLE_ENTITY:
      return state.map(e => entity(e, action));
    default:
      return state;
  }
}

export const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch(action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

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
    type: TOGGLE_ENTITY,
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
