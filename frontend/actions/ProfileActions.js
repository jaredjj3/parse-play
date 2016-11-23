export const UPDATE_PROFILE = 'UPDATE_PROFILE';
export const CLEAR_PROFILE = 'CLEAR_PROFILE';

export const updateProfile = resumeText => ({
  type: UPDATE_PROFILE,
  resumeText
});

export const clearProfile = () => ({
  type: CLEAR_PROFILE
});