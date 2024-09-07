$(function(){
  // ########## playerWrap ##########
  $('.btns-player a').click(function(){
    $(this).siblings().removeClass('focus');
    $(this).addClass('focus');
    var btnPlayer = $(this).attr('data-content')
    $('.player article div').removeClass('focus')
    $('#' + btnPlayer).addClass('focus')
  })
  // ########## baseCharacterWrap ##########
  $('.btns-character button').click(function(){
    $(this).siblings().removeClass('focus');
    $(this).addClass('focus')
    var btnCharacter = $(this).attr('data-content')
    $('#' + btnCharacter).siblings().removeClass('focus')
    $('#' + btnCharacter).addClass('focus')
  })
  // ########## content_map ##########
  $('.map .imgGroup').slick({
    dots: true
  });
})