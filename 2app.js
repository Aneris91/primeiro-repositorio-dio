'use stric'

const switcher= document.querySelector('.btn01');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')
    var className=document.body.className;
    if (className=="light-theme") {
        this.Context = 'Dark';
    }
    else {
        this.textContent = 'Tema';
    }
});

$(document).ready(function(){

    $("#imgBandeira").click(function(){
      if($(this).attr("src") == "./css/firefly.png") 
        $(this).attr("src","./css/firefly-white.png");
      else
        $(this).attr("src","./css/firefly-white.png");
  
    });
  });

