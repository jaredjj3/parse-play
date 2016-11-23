export const PARSE_RESUME = 'PARSE_RESUME';

export const parseResume = resumeText => ({
  type: PARSE_RESUME,
  resumeText
});