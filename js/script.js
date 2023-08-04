$(document).ready(function() {
    const $daySelector = $('#daySelector');
    const $dayCells = $('.day-cell[data-day]');
  
    // Función para mostrar todas las celdas de día
    function showAllDayCells() {
      $dayCells.show();
    }
  
    // Función para ocultar todas las celdas de día excepto el día seleccionado
    function showSelectedDay(selectedDay) {
      $dayCells.hide();
      
      if (selectedDay === 'all') {
        showAllDayCells();
      } else {
        $dayCells.filter(`[data-day="${selectedDay}"]`).show();
      }
    }
  
    // Al cargar la página
    const currentWindowWidth = $(window).width();
    if (currentWindowWidth >= 768) {
      showAllDayCells();
    }
  
    // Al cambiar el día seleccionado
    $daySelector.on('change', function() {
      const selectedDay = $(this).val();
      showSelectedDay(selectedDay);
    });
  
    // Al cambiar el tamaño de la ventana
    $(window).on('resize', function() {
      const newWindowWidth = $(this).width();
      const currentSelectedDay = $daySelector.val();
  
      if (newWindowWidth >= 768) {
        showAllDayCells();
      } else {
        showSelectedDay(currentSelectedDay);
      }
    });
  });  