// upword animation
gsap.from(".education .collages .iitm", {
  y: 150,
  duration: 1,
  opacity: 0.5,
  scrollTrigger: ".education .collages .iitm",
  //   scrollTrigger: {
  //     trigger: ".education .collages .iitm",
  //     scrollr: "body",
  //     markers: true,
  //     // start: "top 55%",
  //     // end: "top 33%",
  //     scrub: 5,
  //   },
});

gsap.from(".education .collages .gour", {
  y: 100,
  duration: 1,
  opacity: 0.5,
  scrollTrigger: ".education .collages .gour",
});

// zoom out
gsap.from(".education .collages .iitm img", {
  scale: 1.8,
  opacity: 0,
  scrollTrigger: ".education .collages .iitm img",
});

gsap.from(".education .collages .gour img", {
  scale: 1.8,
  opacity: 0,
  scrollTrigger: ".education .collages .gour img",
});
