function cmsAppState(state = [], action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'ADD_ENTITY':
      return [];
    default:
      return state;
  }
}

import expect from 'expect';
import deepFreeze from 'deep-freeze';

const testAddEntity = () => {
  const stateBefore = [];
  const action = {
    type: 'ADD_ENTITY',
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
    cmsAppState(stateBefore,action)
  ).toEqual(stateAfter);
  console.log('Passed!');
};

testAddEntity();
export default cmsAppState;
