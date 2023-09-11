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
    try {
      const users = await api.getAllUser();
      dispatch(actionReceiveAllUsers(users));
    } catch (error) {
      alert(error.message);
    }
  };
}
