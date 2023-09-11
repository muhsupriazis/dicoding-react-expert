import { ActionType } from './action';

export default function threadReducer(thread = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_DETAIL_THREAD:
      return action.payload.thread;
    case ActionType.ADD_NEW_COMMENT:
      return {
        ...thread,
        comments: [...thread.comments, action.payload.comment],
      };
    default:
      return thread;
  }
}
