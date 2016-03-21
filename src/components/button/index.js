import React from 'react';
import { connect } from 'react-redux';

import './button.scss';

import { increment, decrement } from '../../actions/counter.js';

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2 className="heading">{this.props.state.counter}</h2>

        <button
          className="button button--increment"
          onClick={this.props.dispatch.bind(this, increment())}>
          +
        </button>

        <button
          className="button button--decrement"
          onClick={this.props.dispatch.bind(this, decrement())}>
          -
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { state };
}

function mapDispatchToProps(dispatch) {
  return { dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);

