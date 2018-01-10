import { Calculator } from './../js/calculator.js';

  // year to seconds
  $(function() {
    $('#y-to-s').submit(function(event) {
      event.preventDefault();
      const ageInYear = $('#ageSeconds').val();
      const newCalculator = new Calculator();
      const output = newCalculator.ageInSeconds(ageInYear);
      $('#solution-1').text(output + " second's");
    });
  });
  // Two dates in seconds
  $(function() {
    $('#twoDatesSeconds').submit(function(event) {
      event.preventDefault();
      const year1 = $('#yearOne').val();
      const month1 = $('#monthOne').val();
      const day1 = $('#dayOne').val();
      const date1 = [year1, month1, day1];

      const year2 = $('#yearTwo').val();
      const month2 = $('#monthTwo').val();
      const day2 = $('#dayTwo').val();
      const date2 = [year2, month2, day2];

      const newCalculator = new Calculator();
      const output = newCalculator.twoDatesSeconds(date2, date1);
      $('#solution-2').text(output + " second's");
    });
  });
  //years on mercury
  $(function() {
    $('#y-on-m').submit(function(event) {
      event.preventDefault();
      const ageInYear = $('#mercuryAge').val();
      const newCalculator = new Calculator();
      const output = newCalculator.yearOnMercury(ageInYear);
      $('#solution-3').text(output + " year's old");
      });
    });
    //years on venus
  $(function() {
    $('#y-on-v').submit(function(event) {
      event.preventDefault();
      const ageInYear = $('#venusAge').val();
      const newCalculator = new Calculator();
      const output = newCalculator.yearOnVenus(ageInYear);
      $('#solution-4').text(output + " year's old");
    });
  });
  // years on mars
  $(function() {
    $('#y-on-mars').submit(function(event) {
      event.preventDefault();
      const ageInYear = $('#marsAge').val();
      const newCalculator = new Calculator();
      const output = newCalculator.yearOnMars(ageInYear);
      $('#solution-5').text(output + " year's old");
    });
  });
  // years on jupitar
  $(function() {
    $('#y-on-j').submit(function(event) {
      event.preventDefault();
      const ageInYear = $('#jupiterAge').val();
      const newCalculator = new Calculator();
      const output = newCalculator.yearOnJupiter(ageInYear);
      $('#solution-6').text(output + " year's old");
    });
  });
  // years left on planet
  $(function() {
    $('#y-left-alive').submit(function(event) {
      event.preventDefault();
      const ageInYear = $('#earthAge').val();
      const sex = $('#sex').val();
      const region = $('#region').val();
      const planet = $('#planet').val();
      const newCalculator = new Calculator();
      const output = newCalculator.yearOnPlanet(ageInYear,sex,region,planet);
      $('#solution-7').text(output);
    });
  });
