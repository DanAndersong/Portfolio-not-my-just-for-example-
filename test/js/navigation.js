//NAVIGATION

//sandwich-menu

$(function () {

    $('.button-menu-device').on('click', function () {
        $('.navigation>.first-menu').slideToggle(300);
    });

});

//button X menu

$(function () {
    var toggle = document.querySelector('.button-menu-device');

    toggle.addEventListener('click', function (e) {
        this.classList.toggle('opened');
    });
});


//button up

jQuery(document).ready(function() {
  
  var btn = $('#button');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });

});