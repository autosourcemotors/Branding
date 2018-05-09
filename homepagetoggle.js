$( document ).ready(function() {
  $("#customSalesEventRow").removeClass("home-expanding-row");
  $('#customSalesEventRow').addClass("expanded");
  $('#customSalesEventRow').addClass("override");
  $('#customSalesEventRow .container-wide').css('cssText', 'width: 100vw !important; max-width:100vw !important;margin:0 !important');
  $('#customSalesEventRow .col-sm-12').css('cssText', 'padding:0 !important');
  $('#customSalesEventRow .row').css('cssText', 'margin-left:0 !important;margin-right:0 !important;');
  $(".expanded-row-title").remove();
  $(".collapsed-row").remove();
  $(".expanded-toggle").remove();
  $(".overlay-fin").remove();
  $(".row-anchor").remove();
});
