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

    const videos = [
        "https://www.youtube.com/embed/_AhC7mm-Prk",
        "https://www.youtube.com/embed/jP0by40KfjE",
        "https://www.youtube.com/embed/ef2EqYFrIdo",
        "https://www.youtube.com/embed/tRBqySH_Aus",
        "https://www.youtube.com/embed/7orY0BT8xxY",
        "https://www.youtube.com/embed/D0zPn4nsKOo",
        "https://www.youtube.com/embed/_0TKBP6B_sw",
        "https://www.youtube.com/embed/P0HfsZnc9rk",
        "https://www.youtube.com/embed/ZR-jeJpVIEE"        
      ];
    
      function createVideoIframe(src) {
        const iframe = document.createElement("iframe");
        iframe.width = "100%";
        iframe.height = "100%";
        iframe.src = src;
        iframe.title = "YouTube video player";
        iframe.frameBorder = "0";
        iframe.allow =
          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        iframe.allowFullscreen = true;
        iframe.loading = "lazy"; // Opcional: carga perezosa
        return iframe;
      }
    
      const videoContainer = document.getElementById("videoContainer");
    
      videos.forEach(videoSrc => {
        const col = document.createElement("div");
        col.className = "col-lg-4 col-md-6 col-sm-12 mb-4";
        const media = document.createElement("div");
        media.className = "media";
        media.appendChild(createVideoIframe(videoSrc));
        col.appendChild(media);
        videoContainer.appendChild(col);
      });
  });  