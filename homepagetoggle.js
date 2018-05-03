$(document).on('click', '.trigger-iFrame', function(event)
  {
    event.preventDefault();
    $('#modal-iFrame').iziModal('open', this);
  });

  $("#modal-iFrame").iziModal(
  {
    title: 'FLOOD TO TRACK',
    subtitle: 'A gorgeous nature time lapse.',
    fullscreen: true,
    headerColor: 'rgb(204, 0, 0)',
    overlayColor: 'rgba(0, 0, 0, 0.4)',
    iconColor: '',
    iconClass: 'icon-chat',
    width: '75vw',
  });

  $(document).on('click', '.trigger-iFrame-2', function(event)
  {
    event.preventDefault();
    $('#modal-iFrame-2').iziModal('open', this);
  });

  $("#modal-iFrame-2").iziModal(
  {
    title: 'ODYSSEY vs PILOT',
    subtitle: 'A gorgeous nature time lapse.',
    fullscreen: true,
    headerColor: 'rgb(204, 0, 0)',
    overlayColor: 'rgba(0, 0, 0, 0.4)',
    iconColor: '',
    iconClass: 'icon-chat',
    width: '75vw',
  });

  window.onload = function()
  {
    document.getElementById('customSalesEventRow').className = 'expanded';
  };
  window.onload = function()
  {
    $(".expanded-row-title").remove();
    $(".collapsed-row").remove();
    $(".expanded-toggle").remove();
  };
