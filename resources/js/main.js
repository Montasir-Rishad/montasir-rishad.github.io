$(document).ready(function(){

//STICKY MENU
$(".js--services-section").waypoint(function(direction){
    if(direction=="down"){
        $("nav").addClass("sticky");

    }else{
        $("nav").removeClass("sticky");
    }
});


    //MIXITUP (PORTFOLIO SECTION)
    var mixer = mixitup(".container");

        //SMOOTH SCROLL FOR IE/EDGE/SAFARI

        $("a").on('click',function(event){
            if(this.hash!==""){
                event.preventDefault();
                var hash = this.hash;

                $('html,body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function(){
                    window.location.hash = hash;

                });

            }
        });

});


function openNav(){
    document.getElementById("myNav").style.width="100%";
}

function closeNav(){
    document.getElementById("myNav").style.width="0%";
}

//For video Funtionability
/*const player = new Plyr('.player', {
    title: 'Example Title',
  });*/

  $( ".player" ).each(function( index ) {
    const player = new Plyr(this, {
        title: 'Example Title',
      });
  });

  