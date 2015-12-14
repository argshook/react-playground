import React from 'react';

export default class Button extends React.Component {
  constructor(props) {
    super();
    this.state = {
      count: 0
    };
  }

  onClick(e) {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <button onClick={this.onClick.bind(this)}>{this.state.count}</button>
    );
  }
};

