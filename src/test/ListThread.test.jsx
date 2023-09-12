/**
 * skenario testing
 *
 * - ListThreads component
 *   - should Threads On Loading when theres no thread
 *   - should list Thread
*/

import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import {
  afterEach,
  describe,
  expect,
  it,
} from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import * as matchers from '@testing-library/jest-dom/matchers';
import ListThread from '../components/ListThreads';

expect.extend(matchers);

describe('ListThread component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should Threads On Loading when theres no thread', async () => {
    const threadsList = [];
    render(<ListThread threads={threadsList} />);

    const message = await screen.findByText('Threads On Loading');

    expect(message).toHaveTextContent('Threads On Loading');
  });

  it('should list Thread', async () => {
    const threadsList = [
      {
        id: 'thread-1',
        title: 'Thread Pertama',
        body: 'Ini adalah thread pertama',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        ownerId: 'users-1',
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0,
        user: {
          avatar: 'https://ui-avatars.com/api/?name=yoga&background=random',
          email: 'john@gmail.com',
          id: 'userid',
          name: 'John',
        },
      },
    ];
    render(
      <BrowserRouter>
        <ListThread threads={threadsList} />
      </BrowserRouter>,
    );
    const message = await screen.findByText('Ini adalah thread pertama');

    expect(message).toHaveTextContent('Ini adalah thread pertama');
  });
});
