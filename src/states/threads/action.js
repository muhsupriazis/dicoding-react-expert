import api from '../../../utils/api';
import { generateTreadsWithUser } from '../../../utils/utils';

export const ActionType = {
  RECEIVE_ALL_THREADS: 'threads/getAll',
  ADD_NEW_THREAD: 'threads/add',
};

export function actionReceiveAllThreads(threads) {
  return {
    type: ActionType.RECEIVE_ALL_THREADS,
    payload: {
      threads,
    },
  };
}

export function actionAddNewThread(thread) {
  return {
    type: ActionType,
    payload: {
      thread,
    },
  };
}

export function asyncActionReceiveAllThreads() {
  return async (dispatch) => {
    try {
      const threads = await api.getAllThreads();
      const users = await api.getAllUser();
      const threadsWithUser = generateTreadsWithUser(threads, users);
      dispatch(actionReceiveAllThreads(threadsWithUser));
    } catch (error) {
      alert(error.message);
    }
  };
}

export function asyncActionAddNewThread({ title, body, category }) {
  return async (dispatch) => {
    try {
      const thread = await api.addNewThread({ title, body, category });
      dispatch(actionAddNewThread(thread));
    } catch (error) {
      alert(error.message);
    }
  };
}
