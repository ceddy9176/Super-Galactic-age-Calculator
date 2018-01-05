import { Calculator } from './../js/calculator.js';

  $(function() {
    $('#y-to-s').submit(function(event) {
      event.preventDefault();
      let ageInYear = $('#ageSeconds').val();
      let newCalculator = new Calculator();
      let output = newCalculator.ageInSeconds(ageInYear);
      $('#solution-1').text(output + " seconds");
    });
  });
