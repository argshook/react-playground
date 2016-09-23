import React from 'react';
import { connect } from 'react-redux';

import './styles.scss';

import { increment, decrement } from './redux';

class Button extends React.Component {
  render() {
    return (
      <div>
        <h2 className="heading">{this.props.button}</h2>

        <button
          className="button button--increment"
          onClick={e => this.props.dispatch(increment())}>
          +
        </button>

        <button
          className="button button--decrement"
          onClick={e => this.props.dispatch(decrement())}>
          -
        </button>
      </div>
    );
  }
}

function mapStateToProps({button}) {
  return {button};
}

export default connect(mapStateToProps)(Button);

