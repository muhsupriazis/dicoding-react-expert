/**
 * skenario testing
 *
 * - CommentForm component
 *   - should handle comment typing correctly
 *   - should call handlerSubmitComment function when Comment button is clicked
*/

import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import {
  afterEach,
  describe,
  expect,
  it,
  vi,
} from 'vitest';
import userEvent from '@testing-library/user-event';
import * as matchers from '@testing-library/jest-dom/matchers';
import CommentForm from '../components/CommentForm';

expect.extend(matchers);

describe('CommentForm component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle comment typing correctly', async () => {
    const mockEvent = vi.fn();
    render(<CommentForm handlerSubmitComment={mockEvent} />);
    const inputContent = await screen.findByPlaceholderText('content');

    await userEvent.type(inputContent, 'hello world!');

    expect(inputContent).toHaveDisplayValue('hello world!');
  });

  it('should call handlerSubmitComment function when Comment button is clicked', async () => {
    const mockEvent = vi.fn();
    render(<CommentForm handlerSubmitComment={mockEvent} />);
    const inputContent = await screen.findByPlaceholderText('content');
    await userEvent.type(inputContent, 'hello world!');
    const buttonSubmit = await screen.findByRole('button');

    await userEvent.click(buttonSubmit);

    expect(mockEvent).toBeCalledWith('hello world!');
  });
});
