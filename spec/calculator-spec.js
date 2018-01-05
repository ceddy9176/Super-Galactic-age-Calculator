import { Calculator } from './../js/calculator.js';

describe('CalculatorTests', function() {

  it('should calculate the age of someone into seconds', function() {
    let calculator = new Calculator();
    expect(calculator.ageInSeconds(19)).toEqual(599184000);

  });
});
