import { connect } from 'react-redux';

import FileForm from './FileForm';
import { toggleModal } from '../../actions/ModalActions';

const mapStateToProps = state => ({
  fileModalOn: state.modal.fileModalOn
});

const mapDispatchToProps = dispatch => ({
  toggleFileModal: () => dispatch(toggleModal('file')) 
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileForm);