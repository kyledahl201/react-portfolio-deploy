import React, { Component } from "react";
import { about } from './../constants/About'
import { skills } from './../constants/Skills'
import { Portfolio } from "./Portfolio/Portfolio";
import { projects } from './../constants/Projects';

import "./App.css";

export class App extends Component {
  constructor() {
    super();

    this.state = {
      selectedSection: "",
      selectedHeading: "",
      selectedQuote: "",
      about: null,
      skills: null,
      projects: null
    };
  }

  componentWillMount () {
		this.setState ({ 
			about,
			skills,
			projects,
			selectedHeading: about.heading,
			selectedQuote: about.quote,
			selectedSection: "about" 
		});
	}
  handleSectionClick = (sectionName) => {
	  this.setState({
      selectedSection: sectionName,
      selectedHeading: this.state[sectionName].heading,
      selectedQuote: this.state[sectionName].quote
  })
  }

  render() {
    return (
      <div className="App">
			<Portfolio
				about={this.state.about}
        skills={this.state.skills}
        projects={this.state.projects}
				selectedHeading={this.state.selectedHeading}
				selectedSection={this.state.selectedSection}
				selectedQuote={this.state.selectedQuote}
				handleSectionClick={this.handleSectionClick} />
      </div>
    );
  }
}

export default App;
