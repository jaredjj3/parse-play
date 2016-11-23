import { CLEAR_PROFILE, UPDATE_PROFILE } from '../actions/ProfileActions';

const _defaultProfile = Object.freeze({
  general: { firstName: "", lastName: "" },
  skills: [],
  experience: [],
  education: []
});

export default (state = _defaultProfile, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch(action.type) {
    case UPDATE_PROFILE:
      
      return nextState;
    case CLEAR_PROFILE:
      return _defaultProfile;
    default:
      return nextState;
  }
};