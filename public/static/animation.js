document.addEventListener("DOMContentLoaded", function () {
  // upword animation
  gsap.from(".education .collages .iitm", {
    y: 150,
    duration: 1,
    opacity: 0.5,
    scrollTrigger: ".education .collages .iitm",
  });

  gsap.from(".education .collages .gour", {
    y: 100,
    duration: 1,
    opacity: 0.5,
    scrollTrigger: ".education .collages .gour",
  });

  // zoom out
  gsap.from(".education .collages .iitm img", {
    y: -20,
    scale: 1.5,
    opacity: 0,
    scrollTrigger: ".education .collages .iitm img",
  });

  gsap.from(".education .collages .gour img", {
    y: -20,
    scale: 1.5,
    opacity: 0,
    scrollTrigger: ".education .collages .gour img",
  });

  //about page---------------->>>>>>
  gsap.from(".about .skills .card1", {
    y: 150,

    opacity: 0.5,
    scrollTrigger: ".about .skills .card1",
  });

  gsap.from(".about .skills .card2", {
    y: 100,

    opacity: 0.5,
    scrollTrigger: ".about .skills .card2",
  });

  gsap.from(".about .skills .card3", {
    y: 150,

    opacity: 0.5,
    scrollTrigger: ".about .skills .card3",
  });

  gsap.from(".about .skills .card4", {
    y: 100,

    opacity: 0.5,
    scrollTrigger: ".about .skills .card4",
  });

  gsap.from(".about .skills .card5", {
    y: 150,

    opacity: 0.5,
    scrollTrigger: ".about .skills .card5",
  });

  gsap.from(".about .skills .card6", {
    y: 100,

    opacity: 0.5,
    scrollTrigger: ".about .skills .card6",
  });

  gsap.from(".about .skills .card7", {
    y: 150,

    opacity: 0.5,
    scrollTrigger: ".about .skills .card7",
  });

  gsap.from(".about .skills .card8", {
    y: 100,

    opacity: 0.5,
    scrollTrigger: ".about .skills .card8",
  });

  gsap.from(".about .skills .card9", {
    y: 150,

    opacity: 0.5,
    scrollTrigger: ".about .skills .card9",
  });

  //contact me------------->>>>>>...
  gsap.from(".contactme .container form label", {
    x: 30,
    opacity: 0,
    // duration:,
    scrollTrigger: ".contactme .container form label",
  });

  gsap.from(".contactme .container form input", {
    scale: 0.5,
    opacity: 0,
    duration: 1,
    scrollTrigger: ".contactme .container form input",
  });
  gsap.from(".contactme .container form textarea", {
    scale: 0.5,
    opacity: 0,
    duration: 1,
    scrollTrigger: ".contactme .container form textarea",
  });
});
