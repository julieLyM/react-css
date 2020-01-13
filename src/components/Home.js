import React, { Component } from "react";
import "./home.css";

const sections = ["Section1", "Section2", "Section3"];

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openIndex: 0
    };
  }

  sectionClick = openIndex => {
    this.setState({ openIndex });
  };

  render() {
    const { openIndex } = this.state;
    return (
      <div className="container">
        {sections.map((section, i) => (
          <div>
            <button
              className="containerTitle"
              onClick={this.sectionClick.bind(null, i)}
            >
              {section}
            </button>
            <div className={`content ${openIndex === i ? "open" : ""}`}>
              jfwmljhgjwhdsdgfwjdkfghwkjlxg lwxfmkjglwkmxjfglmjwx wxfùg wmlx
              fglmw xfglmkj wxlmfkg
            </div>
          </div>
        ))}
      </div>
    );
  }
}
