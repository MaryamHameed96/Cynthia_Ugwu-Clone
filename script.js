document.addEventListener("DOMContentLoaded", function() {
    const scroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
});
document.addEventListener("DOMContentLoaded", function () {
    document.documentElement.style.overflow = "visible";
});
function firstPageAnim() {
    var tl = gsap.timeline();
  
    tl.from("#nav", {
      y: "-10",
      opacity: 0,
      duration: 1.5,
      ease: "expo.inOut",

    })
      .to(".boundingelem", {
        y: 0,
        ease: Expo.easeInOut,
        duration: 2,
        delay: -1,
        stagger: 0.2,
      })
      .from("#herofooter", {
        y: -10,
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut,
      });
  }
document.addEventListener("DOMContentLoaded", function () {
    firstPageAnim(); // Function ko call kar rahe hain
});
function circleChaptaKaro() {
    let xprev = 0;
    let yprev = 0;
    let timeout;

    window.addEventListener("mousemove", function (dets) {
        clearTimeout(timeout);

        let xdiff = Math.abs(dets.clientX - xprev);
        let ydiff = Math.abs(dets.clientY - yprev);

        let xscale = gsap.utils.clamp(0.8, 1.2, 1 + xdiff * 0.005);
        let yscale = gsap.utils.clamp(0.8, 1.2, 1 + ydiff * 0.005);

        xprev = dets.clientX;
        yprev = dets.clientY;

        gsap.to("#minicircle", {
            x: dets.clientX,
            y: dets.clientY,
            scaleX: xscale,
            scaleY: yscale,
            duration: 0.1,
            ease: "power1.out",
           
        });

        timeout = setTimeout(function () {
            gsap.to("#minicircle", {
                scaleX: 1,
                scaleY: 1,
                duration: 0.2,
                ease: "power1.out",
            });
        }, 100);
    });
}

document.querySelectorAll(".elem").forEach(function (elem) {
    let rotate = 0;
  
    elem.addEventListener("mouseleave", function () {
        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: Power3.easeOut,
            duration: 0.5,
        });
    });

    elem.addEventListener("mousemove", function (dets) {
        let diff = dets.clientY - elem.getBoundingClientRect().top;
        let diffrot = dets.clientX - rotate;
        rotate = dets.clientX;

        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power3.easeOut,
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
            duration: 0.2
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    firstPageAnim();
    circleChaptaKaro(); // Function ko call kar rahe hain
});