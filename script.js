let tl = gsap.timeline({
  scrollTrigger: {
    // markers: true,
    trigger: "#main",
    start: "50% 50%",
    end: "100% 50%",
    scrub: 2,
    pin: true,
  },
});

tl.to("#top", { top: "-50%" }, "a")
  .to("#bottom", { bottom: "-50%" }, "a")
  .to("#top-h", { top: "75%" }, "a")
  .to("#bottom-h", { bottom: "-110%" }, "a")
  .to(".content", { marginTop: "0%" }, "a");
