let calculation = localStorage.getItem('cal') || '';
      
      showCal()

      function updateCalculation(value) {
        calculation += value;
        document.querySelector('.js-updateCalculation')
          .innerHTML = `${calculation}`;
        localStorage.setItem('cal', calculation);
      }

      function showCal () {
        document.querySelector('.calculations')
          .innerHTML = calculation;
      }