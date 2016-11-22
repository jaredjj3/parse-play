import React from 'react';
import sampleResume from '../../util/sampleResume';

export default class extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      resumeText: sampleResume, 
      errors: []
    };
  }

  render () {
    const errors = this.state.errors.map( error => <li>{error}</li>);
    return(
      <div className="upload-container">
        <div className="resume-container">
          <h1>Type or paste your resume here</h1>
          <textarea 
            className="resume-text"
            value={this.state.resumeText}
            onChange={this.onChange.bind(this)}
          >
          </textarea>
          <div className="resume-buttons-container">
            <div 
              onClick={this.onParseClick.bind(this)} 
              className="upload-button parse"
            >
              parse <i className="material-icons">play_arrow</i>
            </div>
            <div className="reset-clear-container">
              <div 
                onClick={this.onResetClick.bind(this)}
                className="upload-button clear reset"
              >
                reset
              </div>
              <div 
                onClick={this.onClearClick.bind(this)}
                className="upload-button clear"
              >
                clear
              </div>
            </div>
          </div>
          <ul className="upload-errors">
              {errors}
          </ul>
        </div>
      </div>
    );
  }

  // event handlers

  onParseClick (e) {
    if (this.state.resumeText.length <= 140) {
      if (this.state.errors.length === 0) {
        const errorsCopy = this.state.errors;
        errorsCopy.push("Resume needs to be at least 140 characters.");
        this.setState({ 
          errors: errorsCopy
        });
      }
      return; 
    } else {
      this.setState({
        errors: []
      });
    }


  }

  onChange (e) {
    this.setState({
      errors: [],
      resumeText: e.target.value
    });
  }

  onResetClick (e) {
    this.setState({
      resumeText: sampleResume
    });
  }

  onClearClick (e) {
    this.setState({
      resumeText: ""
    });
  }
}