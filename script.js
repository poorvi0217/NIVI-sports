var tl= gsap.timeline();
var cusor=document.querySelector("#cursor");
var main=document.querySelector("body");

function myFunction() {
    let element = document.body;
    element.classList.toggle("dark-mode");
}

main.addEventListener("mousemove" ,function(dets){
    gsap.to(cusor ,{
        x:dets.x,
        y:dets.y,
        duration:1
 })
})

tl.from(".logo",{
    x:-100,
    duration:0.9
})
tl.from(".nav li",{
    y:-100,
    stagger:0.3
})
tl.from("#showcase h1 ,h2",{
    y:100,
    opacity:0,
    stagger:0.1
})
tl.from("p",{
    y:-100,
    opacity:0,
    
})
tl.from("footer li" ,{
    x:50,
    opacity:0,
    stagger:0.1
})