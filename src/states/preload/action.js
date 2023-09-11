import api from '../../../utils/api';
import { actionSetAuth } from '../auth/action';

export const ActionType = {
  SET_IS_PRELOAD: 'auth/preload',
};

export function actionSetPreload(isPreload) {
  return {
    type: ActionType.SET_IS_PRELOAD,
    payload: {
      isPreload,
    },
  };
}

export function asyncSetIsPreload() {
  return async (dispatch) => {
    try {
      const userAuth = await api.getOwnProfile();
      dispatch(actionSetAuth(userAuth));
    } catch (error) {
      dispatch(actionSetAuth(null));
    } finally {
      dispatch(actionSetPreload(false));
    }
  };
}
