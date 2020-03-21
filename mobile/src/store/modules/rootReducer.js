import { combineReducers } from 'redux';

import auth from './auth/reducers';

const reducers = combineReducers({
  auth,
});

export default reducers;
