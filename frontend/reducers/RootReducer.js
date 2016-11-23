import { combineReducers } from 'redux';

import ProfileReducer from './ProfileReducer';
import ResumeReducer from './ResumeReducer';

export default combineReducers({
  profile: ProfileReducer,
  resume: ResumeReducer
});