var $ = require('jquery');
jQuery = $;
var animsition = require('animsition');

var $animsition = $('.animsition');
var $base = $('.js-animsition');
var $home = $('.js-animsition-home');
var $overlay = $('.js-animsition-overlay');


if($animsition.hasClass('js-animsition-home')){

   $home
    .animsition()
    .one('animsition.start',function(){})
    .one('animsition.end',function(){
      $(this)
        .find('.animsition-child')
        .addClass('zoom-in')
        .css({
          'opacity':1
        });
  });

} else if($animsition.hasClass('js-animsition')){

  $base
  .animsition()
  .one('animsition.start',function(){
    console.log('animsition.start');
  })
  .one('animsition.end',function(){
    console.log('animsition.end');
  });

} else {

  $overlay
  .animsition({
    overlay: true
  })
  .one('animsition.start',function(){
    $('.animsition-overlay-wrapper')
      .addClass('animsition-overlay-wrapper--start');
  })
  .one('animsition.end',function(){});

}
