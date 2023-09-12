import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../../utils/api';

export const ActionType = {
  ADD_NEW_COMMENT: 'comment/add',
};

export function actionAddNewComment(comment) {
  return {
    type: ActionType.ADD_NEW_COMMENT,
    payload: {
      comment,
    },
  };
}

export function asyncActionAddNewComment({ id, content }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const comment = await api.addNewComment(id, content);
      console.log(comment);
      dispatch(actionAddNewComment(comment));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}
