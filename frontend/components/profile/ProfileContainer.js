import { connect } from 'react-redux';

import Profile from './Profile';

const mapStateToProps = state => ({
  profile: state.profile
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);