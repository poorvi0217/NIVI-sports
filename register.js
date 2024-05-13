gsap.to(".sign_in" ,{
    y:-250,
    duration:1,
    opacity:0
})

gsap.from(".login" ,{
    y:250,
    duration:1,
    opacity:0
})
function signIn(){
    gsap.from(".sign_in" ,{
        y:250,
        duration:1,
        opacity:0
    })
    gsap.to(".login" ,{
        y:250,
        duration:1,
        opacity:0
    })
}
function login(){
    gsap.to(".sign_in" ,{
        y:-250,
        duration:1,
        opacity:0
    })
    gsap.from(".login" ,{
        y:250,
        duration:1,
        opacity:0
    })
}
