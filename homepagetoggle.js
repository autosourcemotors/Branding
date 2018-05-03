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

  // Get the modal
  var modal = document.getElementById('myModal');

  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  btn.onclick = function()
  {
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function()
  {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event)
  {
    if (event.target == modal)
    {
      modal.style.display = "none";
    }
  }
