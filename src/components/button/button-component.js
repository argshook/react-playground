import React from 'react';

let count = 0;

export default class Button extends React.Component {
  render() {
    return (
      <button onClick={() => {count += 1;}}>{count}</button>
    );
  }
};

