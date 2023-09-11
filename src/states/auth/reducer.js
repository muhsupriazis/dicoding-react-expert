import { ActionType } from './action';

export default function authReducer(userAuth = null, action = {}) {
  switch (action.type) {
    case ActionType.SET_AUTH_USER:
      return action.payload.userAuth;
    case ActionType.UNSET_AUTH_USER:
      return null;
    default:
      return userAuth;
  }
}
