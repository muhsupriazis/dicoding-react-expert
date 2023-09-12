/**
 * skenario test
 *
 * - asyncActionReceiveAllThreads thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 */

import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from 'vitest';
import api from '../../../utils/api';
import { actionReceiveLeaderboards, asyncActionReceiveLeaderboards } from './action';

const fakeResponseSuccess = [
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
      id: 'users-2',
      name: 'Jane Doe',
      email: 'jane@example.com',
      avatar: 'https://generated-image-url.jpg',
    },
    score: 5,
  },
];

const fakeErrorResponse = new Error('Something went wrong');

describe('asyncActionReceiveLeaderboards thunk', () => {
  beforeEach(() => {
    api._getAllLeaderboard = api.getAllLeaderboard;
  });

  afterEach(() => {
    api.getAllLeaderboard = api._getAllLeaderboard;

    delete api._getAllLeaderboard;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    api.getAllLeaderboard = () => Promise.resolve(fakeResponseSuccess);
    const dispatch = vi.fn();

    await asyncActionReceiveLeaderboards()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(actionReceiveLeaderboards(fakeResponseSuccess));
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    api.getAllLeaderboard = () => Promise.reject(fakeErrorResponse);
    const dispatch = vi.fn();
    window.alert = vi.fn();

    await asyncActionReceiveLeaderboards()(dispatch);

    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});
