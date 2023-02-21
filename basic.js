
var typed = new Typed(".multiText",{
    strings: ["Fontend Developer", "Youtuber", "Blogger"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})



let menuIcon = document.querySelector('#menu_icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}



let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    section.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove("active");
                document.querySelector('header nav a[href*='+ id +']').classList.add('active')
            })
        }
    })
}


let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY >100)



menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');


ScrollReveal({
     reset: true,
     distance: '80px',
     duration: 2000,
     delay: 200
    
    });

 ScrollReveal().reveal('.home_content, .heading', { origin:'top'});

 ScrollReveal().reveal('.home_image, .service_container, .portfolio_container, .contract form', { origin:'bottom'});


 ScrollReveal().reveal('.home_content h1, .about_img',{ origin:'left'});
 ScrollReveal().reveal('.home_content p, .about_content',{ origin:'right'});

