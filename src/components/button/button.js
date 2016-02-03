import React from 'react';
import './button.scss';

export default class Button extends React.Component {
  constructor(props) {
    super();

    this.state = {
      count: 0
    };
  }

  onClick(e) {
    this.setState({
      count: this.calculateCount()
    });
  }

  calculateCount() {
    return this.state.count % 2 ? this.state.count - 5 : this.state.count + 3;
  }

  render() {
    return (
      <button className="button" onClick={this.onClick.bind(this)}>{this.state.count}</button>
    );
  }
};

