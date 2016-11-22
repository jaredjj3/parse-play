import { TOGGLE_MODAL } from '../actions/ModalActions';

const _defaultModals = Object.freeze({
  fileModalOn: false
});

export default (state = _defaultModals, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch(action.type) {
    case TOGGLE_MODAL:
      const targetModal = `${action.modal}ModalOn`; 
      nextState.targetModal = !nextState.targetModal;
      return nextState;
    default:
      return nextState;
  }
};