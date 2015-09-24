var $ = require('jquery');
// jQuery = $;
var animsition = require('animsition');

var $animsition = $('.animsition');
var $base = $('.js-animsition');
var $home = $('.js-animsition-home');
var $overlay = $('.js-animsition-overlay');


if($animsition.hasClass('js-animsition-home')){

   $home.animsition({
     timeout:true
   })

} else if($animsition.hasClass('js-animsition')){

  $base
  .animsition({
    timeout:true
  })
  .one('animsition.inStart',function(){
    console.log('animsition.inStart');
  })
  .one('animsition.inEnd',function(){
    console.log('animsition.inEnd');
  })
  .one('animsition.outStart',function(){
    console.log('animsition.outStart');
  })
  .one('animsition.outEnd',function(){
    console.log('animsition.outEnd');
  });

} else {

  $overlay
  .animsition({
    timeout:true,
    overlay: true
  })
  .one('animsition.inStart',function(){
    $('.animsition-overlay-wrapper')
      .removeClass('is-init');
  })
  .one('animsition.inEnd',function(){});

}
