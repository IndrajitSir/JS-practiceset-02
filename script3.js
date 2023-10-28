var circle = document.querySelector("#circle");
window.addEventListener("mousemove",function(details){
    let xval = gsap.utils.mapRange(0, window.innerWidth, 100, window.innerWidth, details.clientX);
    let yval = gsap.utils.mapRange(0, window.innerHeight, 100, window.innerHeight, details.clientY);
    gsap.to(circle,{
        top: yval+"px",
        left: xval+"px",
        ease: Power4,
    });
});
