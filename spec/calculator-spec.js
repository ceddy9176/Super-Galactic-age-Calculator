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

  it('should calculate the age of someone into Venusian years', function() {
    let calculator = new Calculator();
    expect(calculator.yearOnVenus(19)).toEqual(30);
  });

  it('should calculate the age of someone into Martian years', function() {
    let calculator = new Calculator();
    expect(calculator.yearOnMars(19)).toEqual(10);
  });

  it('should calculate the age of someone into Jovian years', function() {
    let calculator = new Calculator();
    expect(calculator.yearOnJupiter(19)).toEqual(1);
  });

  it('should calculate how long someone has left to live in each planet based on location and sex', function() {
    let calculator = new Calculator();
    let age = 19;
    let sex = "male";
    let continent = "North America";
    let planet = "Mercury";
    expect(calculator.yearOnPlanet(age,sex,continent,planet)).toEqual(236 + " more years to live on " + planet);
  });

});
