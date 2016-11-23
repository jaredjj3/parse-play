import React from 'react';

export default ({ skills }) => {
  const skillItems = skills.map((skill, i) => (
    <li key={i}>
      <span className="skill-item">
        {skill}
      </span>
    </li>
  ));
  return(
    <ul className="skills-list">
      {skillItems}
    </ul>
  );
};