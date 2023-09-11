/**
* test scenario for threadReducer
*
* - threadReducer function
*  - should return the initial state when given by unknown action
*  - should return the leaderboard when given by RECEIVE_LEADERBOARDS action
*/

import { describe, expect, it } from 'vitest';
import leaderboardsReducer from './reducer';
import { ActionType } from './action';

describe('leaderboardReducer function', () => {
  it('should return the initial state when given by blabla action', () => {
    const initialState = [];
    const action = {
      type: 'blabla',
    };

    const nextState = leaderboardsReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });

  it('should return the leaderboard when given type RECEIVE_LEADERBOARDS action', () => {
    const initialState = [];
    const action = {
      type: ActionType.RECEIVE_LEADERBOARDS,
      payload: {
        leaderboards: [
          {
            user: {
              id: 'users-1',
              name: 'John Doe',
              email: 'john@example.com',
              avatar: 'https://generated-image-url.jpg',
            },
            score: 10,
          },
          {
            user: {
              id: 'users-1',
              name: 'John Doe',
              email: 'john@example.com',
              avatar: 'https://generated-image-url.jpg',
            },
            score: 10,
          },
        ],
      },
    };

    const nextState = leaderboardsReducer(initialState, action);

    expect(nextState).toEqual(action.payload.leaderboards);
  });
});
