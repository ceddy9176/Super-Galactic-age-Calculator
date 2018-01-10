import { Calculator } from './../js/calculator.js';

describe('CalculatorTests', function() {

  it('should calculate the age of someone into seconds', function() {
    const calculator = new Calculator();
    expect(calculator.ageInSeconds(19)).toEqual(599184000);
  });

  it('should calculate the seconds between two dates', function() {
    const calculator = new Calculator();
    const date1 = [2018, 0, 1];
    const date2 = [2018, 0, 2];
    expect(calculator.twoDatesSeconds(date2,date1)).toEqual(86400);
  });

  it('should calculate the age of someone into Mercurian years', function() {
    const calculator = new Calculator();
    expect(calculator.yearOnMercury(19)).toEqual(78);
  });

  it('should calculate the age of someone into Venusian years', function() {
    const calculator = new Calculator();
    expect(calculator.yearOnVenus(19)).toEqual(30);
  });

  it('should calculate the age of someone into Martian years', function() {
    const calculator = new Calculator();
    expect(calculator.yearOnMars(19)).toEqual(10);
  });

  it('should calculate the age of someone into Jovian years', function() {
    const calculator = new Calculator();
    expect(calculator.yearOnJupiter(19)).toEqual(1);
  });

  it('should calculate how long someone has left to live in each planet based on location and sex', function() {
    const calculator = new Calculator();
    const age = 19;
    const sex = "male";
    const continent = "North America";
    const planet = "Mercury";
    expect(calculator.yearOnPlanet(age,sex,continent,planet)).toEqual(236 + " more years to live on " + planet);
  });

  it('should notify the user if their age is over the estimated life expectancy', function() {
    const calculator = new Calculator();
    const age = 100;
    const sex = "male";
    const continent = "North America";
    const planet = "Jupiter";
    expect(calculator.yearOnPlanet(age,sex,continent,planet)).toEqual("your dead, try to be younger next time.");
  });

});
