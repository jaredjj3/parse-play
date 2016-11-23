import { connect } from 'react-redux';

import Upload from './Upload';
import { parseResume } from '../../actions/ResumeActions';
import { clearProfile, updateProfile } from '../../actions/ProfileActions'; 

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  parseResume: resumeText => {
    dispatch(parseResume(resumeText));
    dispatch(clearProfile());
    dispatch(updateProfile());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Upload);