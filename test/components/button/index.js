import { expect } from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import Button from '../../../src/components/button';

describe('Component: Button', function() {
  beforeEach(() => {
    let renderer = TestUtils.createRenderer();
    renderer.render(<Button />);

    this.button = renderer.getRenderOutput();
  });

  it('should work', () => {
    expect(this.button.type).to.equal('button');
  });

  it('should have correct className', () => {
    expect(this.button.props.className).to.equal('button');
  });

  it('should have onClick handler', () => {
    expect(this.button.props.onClick).to.be.a('function');
  });
});

