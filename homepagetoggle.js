window.onload = function(){
  document.getElementById('customSalesEventRow').className = 'expanded';
  document.getElementById('customSalesEventRow').className = 'override';
  $('#customSalesEventRow').find('.container-wide').attr('style', 'background: red !important');
  $(".expanded-row-title").remove();
  $(".collapsed-row").remove();
  $(".expanded-toggle").remove();
  $(".overlay-fin").remove();
  $(".row-anchor").remove();
};
