import api from '../../../utils/api';

export const ActionType = {
  SET_AUTH_USER: 'auth/set',
  UNSET_AUTH_USER: 'auth/unset',
};

export function actionSetAuth(userAuth) {
  return {
    type: ActionType.SET_AUTH_USER,
    payload: {
      userAuth,
    },
  };
}

export function actionUnsetAuth() {
  return {
    type: ActionType.UNSET_AUTH_USER,
    payload: {
      userAuth: null,
    },
  };
}

export function asyncActionSetAuth({ email, password }) {
  return async (dispatch) => {
    try {
      const token = await api.login({ email, password });
      api.putAccessToken(token);
      const userAuth = await api.getOwnProfile();
      dispatch(actionSetAuth(userAuth));
    } catch (error) {
      alert(error.message);
    }
  };
}

export function asyncActionUnsetAuth() {
  return async (dispatch) => {
    try {
      api.putAccessToken('');
      dispatch(actionUnsetAuth());
    } catch (error) {
      alert(error.message);
    }
  };
}

export function asyncRegisterAuth({ name, email, password }) {
  return async () => {
    try {
      await api.register({ name, email, password });
    } catch (error) {
      alert(error.message);
    }
  };
}
