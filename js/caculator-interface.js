import { Calculator } from './../js/calculator.js';

  // year to seconds
  $(function() {
    $('#y-to-s').submit(function(event) {
      event.preventDefault();
      let ageInYear = $('#ageSeconds').val();
      let newCalculator = new Calculator();
      let output = newCalculator.ageInSeconds(ageInYear);
      $('#solution-1').text(output + " second's");
    });
  });
  // Two dates in seconds
  $(function() {
    $('#twoDatesSeconds').submit(function(event) {
      event.preventDefault();
      let year1 = $('#yearOne').val();
      let month1 = $('#monthOne').val();
      let day1 = $('#dayOne').val();
      let date1 = [year1, month1, day1];

      let year2 = $('#yearTwo').val();
      let month2 = $('#monthTwo').val();
      let day2 = $('#dayTwo').val();
      let date2 = [year2, month2, day2];

      let newCalculator = new Calculator();
      let output = newCalculator.twoDatesSeconds(date2, date1);
      $('#solution-2').text(output + " second's");
    });
  });
  //years on mercury
  $(function() {
    $('#y-on-m').submit(function(event) {
      event.preventDefault();
      let ageInYear = $('#mercuryAge').val();
      let newCalculator = new Calculator();
      let output = newCalculator.yearOnMercury(ageInYear);
      $('#solution-3').text(output + " year's old");
      });
    });
