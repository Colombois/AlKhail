$(document).ready(function() {

  /*nav toggle*/
  $(window).on("scroll", function() {
    if ($(window).scrollTop()) {
      $('nav').addClass('toggleNav');
    } else {
      $('nav').removeClass('toggleNav');
    }
  })

  // mobile button click
  $('.toggleMenu').on("click", function() {
    $("nav ul").toggleClass("showing");
  })

  // sorting project.html images

  $( window ).on( "load", function(){
    for (var i = 1; i < 93; i++) {
      $('#projects').append('<a href="images/projects/villa/0' + i + '.jpg" data-lightbox="roadtrip"><img src="images/projects/villa/0' + i + '.jpg">');
    }
  })

  $('#villa').click(function() {
    $(this).toggleClass('active').siblings().removeClass('active');
    $('#projects').empty();
    for (var i = 1; i < 93; i++) {
      $('#projects').append('<a href="images/projects/villa/0' + i + '.jpg" data-lightbox="roadtrip"><img src="images/projects/villa/0' + i + '.jpg">');
    }
  })

  $('#interior').click(function() {
    $(this).toggleClass('active').siblings().removeClass('active');
    $('#projects').empty();
    for (var i = 1; i < 29; i++) {
      $('#projects').append('<a href="images/projects/interior/0' + i + '.jpg" data-lightbox="roadtrip"><img src="images/projects/interior/0' + i + '.jpg">');
    }
  })

  $('#building').click(function() {
    $(this).toggleClass('active').siblings().removeClass('active');
    $('#projects').empty();
    for (var i = 1; i < 33; i++) {
      $('#projects').append('<a href="images/projects/buildings/0' + i + '.jpg" data-lightbox="roadtrip"><img src="images/projects/buildings/0' + i + '.jpg">');
    }
  })

  $('#mosque').click(function() {
    $(this).toggleClass('active').siblings().removeClass('active');
    $('#projects').empty();
    for (var i = 1; i < 6; i++) {
      $('#projects').append('<a href="images/projects/mosque/0' + i + '.jpg" data-lightbox="roadtrip"><img src="images/projects/mosque/0' + i + '.jpg">');
    }
  })

})
