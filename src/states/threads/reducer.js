import { ActionType } from './action';

export default function threadsReducer(threads = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_ALL_THREADS:
      return action.payload.threads;
    case ActionType.ADD_NEW_THREAD:
      return [action.payload.thread, ...threads];
    default:
      return threads;
  }
}
