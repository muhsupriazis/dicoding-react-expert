import api from '../../../utils/api';

export const ActionType = {
  RECEIVE_LEADERBOARDS: 'leaderboards/getAll',
};

export function actionReceiveLeaderboards(leaderboards) {
  return {
    type: ActionType.RECEIVE_LEADERBOARDS,
    payload: {
      leaderboards,
    },
  };
}

export function asyncActionReceiveLeaderboards() {
  return async (dispatch) => {
    try {
      const leaderboards = await api.getAllLeaderboard();
      dispatch(actionReceiveLeaderboards(leaderboards));
    } catch (error) {
      alert(error.message);
    }
  };
}
