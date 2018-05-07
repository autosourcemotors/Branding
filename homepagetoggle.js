window.onload = function(){
  document.getElementById('customSalesEventRow').className = 'expanded';
  document.getElementById('customSalesEventRow').className = 'override';
  document.getElementById('customSalesEventRow').className = 'override';
  $('.expanded-row.darken-overlay.container-wide').attr('width', 'width: 100vw !important');
  $( ".expanded-row.darken-overlay.container-wide" ).css( "maxWidth", '100vw');
  $(".expanded-row-title").remove();
  $(".collapsed-row").remove();
  $(".expanded-toggle").remove();
  $(".overlay-fin").remove();
  $(".row-anchor").remove();
};
