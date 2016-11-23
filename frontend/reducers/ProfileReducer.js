import { CLEAR_PROFILE, UPDATE_PROFILE } from '../actions/ProfileActions';
import * as regex from '../util/regex';

const _defaultProfile = Object.freeze({
  general: { firstName: "", lastName: "" },
  skills: [],
  experience: [],
  education: []
});

// helpers 

const getBlocks = text => text.split("\n\n");

const blockToLines = block => block.split("\n");

const check = (line, reg) => {
  const matches = line.match(reg);
  if (matches !== null) {
    return matches[0];
  } else {
    return null;
  }
};

const handlePri = (obj, pri, block) => {
  if (pri === null) {
    return;
  }
  // console.log(pri);
  switch(pri.trim().toUpperCase()) {
    case 'SUMMARY':
    case 'OBJECTIVE':
      obj.general.summary = blockToLines(block).slice(1).join(" ");
      return;
    case 'SKILLS':
    case 'KEY SKILLS':
      const skills = blockToLines(block)
        .slice(1)
        .join(",")
        .replace(regex.designator, "")
        .split(",");
      obj.skills = skills;
      return;
    default:
      return;
  }
};

const checkName = (obj, str) => {
  const matches = str.match(regex.name);
  if (matches) {
    const arr = matches[1].split(" ");
    obj.general.firstName = arr[0];
    obj.general.lastName = arr[1];
  }
};

const checkPhone = (obj, str) => {
  const matches = str.match(regex.phone);
  if (matches) {
    obj.general.phone = matches[0];
  }
};

const checkEmail = (obj, str) => {
  const matches = str.match(regex.email);
  if (matches) {
    obj.general.email = matches[0];
  }
};

export default (state = _defaultProfile, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch(action.type) {
    case UPDATE_PROFILE:
      const { resumeText } = action;
      checkName(nextState, resumeText);
      checkPhone(nextState, resumeText);
      checkEmail(nextState, resumeText);
      const blocks = getBlocks(action.resumeText);
      for (let i = 0; i < blocks.length; i++) {
        const block = blocks[i];
        const lines = blockToLines(block);
        const pri = check(lines[0], regex.primaryField);
        handlePri(nextState, pri, block);
      }
      
      return nextState;
    case CLEAR_PROFILE:
      return _defaultProfile;
    default:
      return nextState;
  }
};