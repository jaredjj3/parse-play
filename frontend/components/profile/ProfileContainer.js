import { connect } from 'react-redux';

import Profile from './Profile';

const mapStateToProps = state => ({
  firstName: state.profile.firstName,
  lastName: state.profile.lastName,
  subtitle: state.profile.subtitle,
  summary: state.profile.summary
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);