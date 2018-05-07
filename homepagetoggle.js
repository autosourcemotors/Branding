window.onload = function(){
  document.getElementById('customSalesEventRow').className = 'expanded';
  document.getElementById('customSalesEventRow').className = 'override';
  $('#customSalesEventRow').find('.container-wide').className = 'maxwidth';
  $(".expanded-row-title").remove();
  $(".collapsed-row").remove();
  $(".expanded-toggle").remove();
  $(".overlay-fin").remove();
  $(".row-anchor").remove();
};
