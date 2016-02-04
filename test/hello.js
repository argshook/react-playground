import { expect } from 'chai';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import jsdom from 'mocha-jsdom';
import domMock from './dom-mock';
import Button from '../src/components/button/button.js';
domMock('<html><body></body></html>');

describe('Component: Button', () => {
  let ButtonComponent;

  before('render Button component', () => {
    ButtonComponent = TestUtils.renderIntoDocument(<Button />);
  });

  //describe('updateCount()', () => {
    //let button = new Button();

    //it('should be a function', () => {
      //expect(button.updateCount).to.be.a('function');
    //});

    //it('should return increased state.count', () => {
      //ButtonComponent.state.count = 0;
      //expect(button.updateCount()).to.equal(1);
    //});
  //})
});

