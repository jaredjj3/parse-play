const _defaultProfile = Object.freeze({
  experience: null
});

export default (state = _defaultProfile, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch(action.type) {
    default:
      return nextState;
  }
};