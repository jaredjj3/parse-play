import React from 'react';

export default class extends React.Component {

  render () {
    return(
      <div className="upload-container">
        <div className="resume-container">
          <h1>Type or paste your resume here</h1>
          <textarea 
            className="resume-text"
          ></textarea>
        </div>
      </div>
    );
  }
}