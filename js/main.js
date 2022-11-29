let aboutOffset= $("#about").offset().top;
aboutOffset-=100;

$(".nav-link").css("color","white")
$(".navbar-brand").css("color","white")
$(window).scroll(function(){
    let windowScroll=$(window).scrollTop()
    if(windowScroll>aboutOffset)
    {
        $("#main-nav").css("backgroundColor","white")
        $("#main-nav a ").css("color","black")
        $(".nav-link").css("color","black")
      
        console.log(aboutOffset);
        
    
    }
    else{
        $("#main-nav").css("backgroundColor","transparent")
        $("#main-nav a ").css("color","White")
        $(".nav-link").css("color","white")
       
        

    }
  
    

})
var typed = new Typed('.element', {
    strings: ['Larry Daniels', 'Developer','Designer'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
    

  });



