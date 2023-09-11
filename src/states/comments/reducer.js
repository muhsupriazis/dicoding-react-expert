import { ActionType } from './action';

export default function commentReducer(comment = null, action = {}) {
  switch (action.type) {
    case ActionType.ADD_NEW_COMMENT:
      return action.payload.comment;
    default:
      return comment;
  }
}
