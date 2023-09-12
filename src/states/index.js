import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import threadsReducer from './threads/reducer';
import authReducer from './auth/reducer';
import usersReducer from './users/reducer';
import threadReducer from './thread/reducer';
import commentReducer from './comments/reducer';
import isPreloadReducer from './preload/reducer';
import leaderboardsReducer from './leaderboards/reducer';

const store = configureStore({
  reducer: {
    threads: threadsReducer,
    userAuth: authReducer,
    users: usersReducer,
    thread: threadReducer,
    comment: commentReducer,
    isPreload: isPreloadReducer,
    leaderboards: leaderboardsReducer,
    loadingBar: loadingBarReducer,
  },
});

export default store;
