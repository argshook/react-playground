import { expect } from 'chai';
import Button from '../src/components/button/button-component.js';

describe('someting', () => {
  it('should work', function() {
    var isChaiWorking = true;
    console.log(new Button().props);
    expect(isChaiWorking).to.be.true;
  });
});

