var tl=gsap.timeline();
tl.from(".logo" ,{
    x:-100,
    duration:1
})
tl.from(".nav li",{
    y:-100,
    stagger:0.3
})
tl.from("#showcase h1 ,h2 ,p" ,{
    y:40,
    delay:0,
    opacity:0,
      stagger:0.1
})
tl.from("footer li" ,{
    x:40,
    delay:0,
    opacity:0 ,
    stagger:0.1 
})
tl
// function myFunction() {
//     let element = document.body;
//     element.classList.toggle("dark-mode");
// }