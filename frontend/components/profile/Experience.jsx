import React from 'react';

export default ({ experience }) => {
  const experienceItems = experience.map( (exp, i) => 
    <li key={`${i}A`}>
      <div className="experience-item">
        <h2>{exp.title}</h2>
        <h3>{exp.company}</h3>
        <h4>{`${exp.dates.from} to ${exp.dates.to}`}</h4>
        <ul className="experience-duties">
          {exp.duties.map((duty, j) => <li key={`${j}B`}>{duty}</li>)}
        </ul>
      </div>
    </li>
  );
  return(
    <ul className="experience-item-list">
      {experienceItems}
    </ul>
  );
};
