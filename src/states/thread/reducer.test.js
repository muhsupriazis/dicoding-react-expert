/**
* test scenario for threadReducer
*
* - threadReducer function
*  - should return the initial state when given by unknown action
*  - should return the thread when given by RECEIVE_DETAIL_THREAD action
*  - should return the thread with the new comment when given by ADD_NEW_COMMENT action
*/

import { describe, expect, it } from 'vitest';
import { ActionType } from './action';
import threadReducer from './reducer';

describe('threadReducer funtion', () => {
  it('should return the initial state when given by unknown action', () => {
    const initialState = null;
    const action = {
      type: 'blabla',
    };

    const nextState = threadReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });

  it('should return the threads when given by RECEIVE_DETAIL_THREAD action', () => {
    const initialState = null;
    const action = {
      type: ActionType.RECEIVE_DETAIL_THREAD,
      payload: {
        thread: {
          id: 'thread-1',
          title: 'Thread Pertama',
          body: 'Ini adalah thread pertama',
          category: 'General',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
          comments: [
            {
              id: 'comment-1',
              content: 'Ini adalah komentar pertama',
              createdAt: '2021-06-21T07:00:00.000Z',
              owner: {
                id: 'users-1',
                name: 'John Doe',
                avatar: 'https://generated-image-url.jpg',
              },
              upVotesBy: [],
              downVotesBy: [],
            },
          ],
        },
      },
    };

    const nextState = threadReducer(initialState, action);

    expect(nextState).toEqual(action.payload.thread);
  });

  it('should return the threads with the new talk when given by ADD_NEW_COMMENT action', () => {
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };

    const action = {
      type: ActionType.ADD_NEW_COMMENT,
      payload: {
        comment: {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      },
    };

    const nextState = threadReducer(initialState, action);

    expect(nextState).toEqual({
      ...initialState,
      comments: [...initialState.comments, action.payload.comment],
    });
  });
});
