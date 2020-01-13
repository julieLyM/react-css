import React, { Component } from 'react';

const chapters = ['chapter1', 'chapter2', 'chapter3'];

export default class Accordeon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showIndex: 0,
    };
  }

  onClicked = ({ showIndex }) => {
    this.setState({
      showIndex,
    });
  };

  render() {
    return (
      <div className="container">
        {chapters.map(chapter => (
          <div>
            <button onClick={this.onClicked.bind(null)}>{chapter}</button>
            <div>{this.state.showIndex}</div>
          </div>
        ))}
      </div>
    );
  }
}
