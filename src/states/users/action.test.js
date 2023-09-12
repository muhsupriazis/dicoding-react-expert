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
import { actionReceiveAllUsers, asyncActionReceiveAllUser } from './action';

const fakeResponseSuccess = [
  {
    id: 'john_doe',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://generated-image-url.jpg',
  },
  {
    id: 'jane_doe',
    name: 'Jane Doe',
    email: 'jane@example.com',
    avatar: 'https://generated-image-url.jpg',
  },
  {
    id: 'fulan',
    name: 'Si Fulan',
    email: 'fulan@example.com',
    avatar: 'https://generated-image-url.jpg',
  },
];

const fakeErrorResponse = new Error('Something went wrong');

describe('asyncActionReceiveLeaderboards thunk', () => {
  beforeEach(() => {
    api._getAllUser = api.getAllUser;
  });

  afterEach(() => {
    api.getAllUser = api._getAllUser;

    delete api._getAllUser;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    api.getAllUser = () => Promise.resolve(fakeResponseSuccess);
    const dispatch = vi.fn();

    await asyncActionReceiveAllUser()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(actionReceiveAllUsers(fakeResponseSuccess));
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    api.getAllUser = () => Promise.reject(fakeErrorResponse);
    const dispatch = vi.fn();
    window.alert = vi.fn();

    await asyncActionReceiveAllUser()(dispatch);

    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});
