import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../../utils/api';

export const ActionType = {
  RECEIVE_ALL_USERS: 'users/getAll',
};

export function actionReceiveAllUsers(users) {
  return {
    type: ActionType.RECEIVE_ALL_USERS,
    payload: {
      users,
    },
  };
}

export function asyncActionReceiveAllUser() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const users = await api.getAllUser();
      dispatch(actionReceiveAllUsers(users));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}
