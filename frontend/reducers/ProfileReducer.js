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
    case 'EMPLOYMENT':
    case 'EMPLOYMENT HISTORY':
    case 'EXPERIENCE':
      const lines = blockToLines(block);
      let newBlock = lines.join("\n")
      if (lines[0].match(regex.primaryField)) {
        newBlock = lines.slice(1).join("\n")
      }
      const experience = {
        title: "",
        company: "",
        dates: {
          from: "",
          to: ""
        },
        duties: []
      };
      checkTitle(experience, newBlock);
      checkCompany(experience, newBlock);
      checkDates(experience, newBlock);
      checkDuties(experience, newBlock);
      obj.experience.push(experience);
      return;
    case 'EDUCATION':
      const eduLines = blockToLines(block);
      let eduBlock = eduLines.join("\n")
      if (eduLines[0].match(regex.primaryField)) {
        eduBlock = eduLines.slice(1).join("\n")
      }
      const education = {
        degree: "",
        school: "",
        GPA: "",
        major: "",
        minor: ""
      };
      // since this structure is much more simpler,
      // we can assign values much easier than the others
      Object.keys(education).forEach( key => {
        checkKey(education, eduBlock, key);
      });
      obj.education.push(education);
      return;
    default:
      return;
  }
};

const checkKey = (obj, str, key) => {
  const reg = new RegExp(
    `[${key[0].toLowerCase()}${key[0].toUpperCase()}]${key.slice(1)}:\\s+(.+)`
  );
  const matches = str.match(reg);
  if (matches) {
    obj[key] = matches[1]; 
  }
};

const checkDuties = (obj, str) => {
  const matches = str.match(regex.duties);
  if (matches) {
    obj.duties = matches.map(match => (
      match.replace("*", "")
    ));
  }
};

const checkCompany = (obj, str) => {
  const matches = str.match(regex.company);
  if (matches) {
    obj.company = matches[1].trim();
  }
};

const checkDates = (obj, str) => {
  const matches = str.match(regex.dates);
  if (matches) {
    const arr = matches[1].split(" to ");
    obj.dates.from = arr[0];
    obj.dates.to = arr[1];
  }
};

const checkTitle = (obj, str) => {
  const matches = str.match(regex.title);
  if (matches) {
    obj.title = matches[1];
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
      let pri = null;
      for (let i = 0; i < blocks.length; i++) {
        const block = blocks[i];
        const lines = blockToLines(block);
        const checked = check(lines[0], regex.primaryField);
        pri = checked ? checked : pri; 
        handlePri(nextState, pri, block);
      }
      
      return nextState;
    case CLEAR_PROFILE:
      return _defaultProfile;
    default:
      return nextState;
  }
};