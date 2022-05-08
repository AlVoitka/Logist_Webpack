


window.addEventListener('DOMContentLoaded', function() {
    
    const upslider = require('./modules/upslider'),
          header = require('./modules/header'),
          downslider =require('./modules/downslider'),
          sliderJS = require('./modules/sliderNativeJS'),
          tabs =require('./modules/tabs'),
          scrollUP =require('./modules/scrollUP')
          prompts = require('./modules/prompts'),
          modal_jQ = require('./modules/modal_jQ'),
          modal_JS = require('./modules/modal_JS'),
          mailer = require('./modules/mailer'),
          interactive = require('./modules/interactive'),
          timer = require('./modules/timer'),
          clientCard = require('./modules/clientCard'),
          form = require('./modules/form');
          

    header();      
    upslider();
    downslider();
    sliderJS();
    tabs();
    scrollUP();
    modal_jQ();
    modal_JS();
    mailer();
    prompts();
    interactive();
    timer();
    clientCard();
    form();
    
    

    new WOW().init();
});