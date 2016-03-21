import React from 'react';
import './button.scss';

export default class Button extends React.Component {
  constructor(props) {
    super();

    this.state = {
      count: 0
    };
  }

  updateCount() {
    this.setState({ count: this.state.count + 1 });
  }

  onClick(e) {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <button className="button" onClick={this.onClick.bind(this)}>{this.state.count}</button>
    );
  }
};

