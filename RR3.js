var items = document.querySelectorAll(".item img");

items.forEach((val, index) => {
    val.src = "RR3 Porsche v Nissan.jpg";
});


var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".wrapper",
        pin: true,
        scrub: 2,
        start: "top top",
        end: "50%+=500px",
    }
});

tl.to(".items img", {scale: 1}, 0);
tl.to(".items", {scale: 2, rotate: 0}, 0);


tl.to(".overlay", {height: "100%"}, .2);
tl.to(".overlay h1", {scale: 1}, .6);
tl.to(".items", {scale: .8, opacity: .2}, .6);

gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".reviews",
        start: "top 40%",
        end: "bottom top",
        scrub: 1,
    }
});

tl.fromTo(".rl", {y: '350%'}, {y: '-150%'}, 0);
tl.fromTo(".rr", {y: '300%'}, {y: '-50%'}, 0);

gsap.fromTo(".rtitle", {x: '100%'}, {x: '-120%', scrollTrigger: {
    trigger: ".rtitle",
    start: "center center",
    end: "bottom center",
    endTrigger: ".reviews",
    pin: true,
    scrub: 1,
}},0);