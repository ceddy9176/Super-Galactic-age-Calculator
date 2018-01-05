import { Calculator } from './../js/calculator.js';

describe('CalculatorTests', function() {

  it('should calculate the age of someone into seconds', function() {
    let calculator = new Calculator();
    expect(calculator.ageInSeconds(19)).toEqual(599184000);
  });

  it('should calculate the seconds between two dates', function() {
    let calculator = new Calculator();
    let date1 = [2018, 0, 1];
    let date2 = [2018, 0, 2];
    expect(calculator.twoDatesSeconds(date2,date1)).toEqual(86400);
  });

  it('should calculate the age of someone into Mercurian years', function() {
    let calculator = new Calculator();
    expect(calculator.yearOnMercury(19)).toEqual(78);
  });

});
