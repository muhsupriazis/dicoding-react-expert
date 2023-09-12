import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../../utils/api';

export const ActionType = {
  RECEIVE_DETAIL_THREAD: 'thread/getDetail',
  ADD_NEW_COMMENT: 'comment/add',
};

export function actionReceiveDetailThread(thread) {
  return {
    type: ActionType.RECEIVE_DETAIL_THREAD,
    payload: {
      thread,
    },
  };
}

export function actionAddNewComment(comment) {
  return {
    type: ActionType.ADD_NEW_COMMENT,
    payload: {
      comment,
    },
  };
}

export function asyncActionReceiveDetailThread(id) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const thread = await api.getThreadById(id);
      dispatch(actionReceiveDetailThread(thread));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export function asyncActionAddNewComment({ id, content }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const comment = await api.addNewComment(id, content);
      dispatch(actionAddNewComment(comment));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}
