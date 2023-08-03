$(document).ready(function() {
    const $daySelector = $('#daySelector');
    const $dayCells = $('.day-cell[data-day]');

        
    $daySelector.on('change', function() {
      const selectedDay = $(this).val();
      
      $dayCells.hide();
      
      if (selectedDay === 'all') {
        $dayCells.show();
      } else {
        $dayCells.filter(`[data-day="${selectedDay}"]`).show();
      }
    });
  });  