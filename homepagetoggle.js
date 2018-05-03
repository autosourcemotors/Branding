$(document).on('click', '.trigger-iFrame', function(event)
  {
    event.preventDefault();
    $('#modal-iFrame').iziModal('open', this);
  });

  $(document).on('click', '.trigger-iFrame-2', function(event)
  {
    event.preventDefault();
    $('#modal-iFrame-2').iziModal('open', this);
  });

window.onload = function(){
  document.getElementById('customSalesEventRow').className = 'expanded';
  document.getElementById('customSalesEventRow').className = 'override';
  $(".container-wide").css("max-width", "100vw");
  $(".expanded-row-title").remove();
  $(".collapsed-row").remove();
  $(".expanded-toggle").remove();
  $(".overlay-fin").remove();
  $(".row-anchor").remove();
};
