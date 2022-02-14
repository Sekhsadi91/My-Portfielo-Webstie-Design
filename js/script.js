var typed = new Typed('.typing', {
    strings:[
        "Freelancer",
        "YouTuber",
        "Developer",
        "Graphics Designer",
        "Designer"
    ],
    typeSpeed:50,
    backSpeed:50,
    loop:true,
})

window.addEventListener("scroll", function() {
    var nvabr = this.document.querySelector("navbar");
    navbar.classList.toggle("sticky", window.scrollY>0);
});

$(document).ready(function(){
    $('#icon').click(function(){
        $('ul').toggleClass('show');
    });
});


var typed = new Typed('.typing-2', {
    strings:[
        "Freelancer",
        "YouTuber",
        "Developer",
        "Graphics Designer",
        "Designer"
    ],
    typeSpeed:50,
    backSpeed:50,
    loop:true,
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    // stagePadding:50,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
         
        },
        600:{
            items:3,
           
        },
        1000:{
            items:3,
            
            
        }
    }
})