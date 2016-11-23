import { PARSE_RESUME } from '../actions/ResumeActions';
import { merge } from 'lodash/merge';

export default (state = "", action) => {
  Object.freeze(state);
  let nextState = state.slice();
  switch(action.type) {
    case PARSE_RESUME:
      nextState = action.resumeText;
      return nextState;
    default:
      return nextState;
  }
};