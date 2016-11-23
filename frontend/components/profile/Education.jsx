import React from 'react';

export default ({ education }) => {
  const educationItems = education.map((edu, i) => 
    <li className="experience-item" key={i}>
      <h2>{`${edu.degree} ${edu.major}`}</h2>
      <h3>{edu.school}</h3>
      <h4>GPA {edu.GPA}</h4>
      <h4>Minor {edu.minor}</h4>
    </li>
  );
  return(
    <ul className="experience-item-list">
      {educationItems}  
    </ul>
  );
};