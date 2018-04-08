// === All other reducers are to be imported to and exposed from here. ===
import { combineReducers } from 'redux-immutable';

import app from './app';
import patients from './patients';
import router from './router';
import user from './user';

const combined = combineReducers({
  app,
  patients,
  router,
  user,
});

export default combined;
