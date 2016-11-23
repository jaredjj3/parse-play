import { PARSE_RESUME } from '../actions/ResumeActions';

const _defaultResume = Object.freeze({

});

export default (state = null, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch(action.type) {
    case PARSE_RESUME:
      
      return nextState;
    default:
      return nextState;
  }
};