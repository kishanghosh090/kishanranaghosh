// loader
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.loader').setAttribute('class', 'loader-hide');

})
// Audios
const loading = new Audio("./assets/landing.mp3");
const hamSound = new Audio("./assets/ham.wav");
const contactSound = new Audio("./assets/contact.wav");
const waterDrop = new Audio("./assets/waterDrop.mp3");
const tok = new Audio("./assets/tok.mp3");
const gotoTop = new Audio("./assets/GotoTOP.mp3");
// variables
const coverhide = document.querySelector(".cover-hide");
const coverhide2 = document.querySelector(".cover-hide2");
const hide = document.querySelector(".hide");
const ham = document.querySelector(".ham");
const hamani = document.querySelector(".ham-ani");
const divrotate1 = document.querySelector(".div-rotate1");
const divrotate2 = document.querySelector(".div-rotate2 ");
const aboutme = document.querySelector(".aboutme")
const home = document.querySelector(".home")
const contactME = document.querySelector(".contactME")
const linkedin = document.querySelector(".linkedin")
const projecttoggle = document.querySelector(".project-toggle")
const Projects = document.querySelector(".Projects")
const crosshide = document.querySelector(".cross-hide")
const crossProject = document.querySelector(".cross-project")
const crosswlc = document.querySelector('.cross-wlc')
const herocontact = document.querySelector(".hero-contact")
const arrow = document.querySelector(".arrow")
// use varibales








ham.addEventListener("click", () => {
  hamSound.play();
  coverhide.classList.toggle("cover-hide");
  hide.classList.toggle("hide");
  coverhide2.classList.toggle("cover-hide2");
  hamani.classList.toggle("ham-ani");
  divrotate1.classList.toggle("div-rotate1");
  divrotate2.classList.toggle("div-rotate2");
});
home.addEventListener("click", () => {
  tok.play();
  coverhide.classList.toggle("cover-hide");
  hide.classList.toggle("hide");
  coverhide2.classList.toggle("cover-hide2");
  hamani.classList.toggle("ham-ani");
  divrotate1.classList.toggle("div-rotate1");
  divrotate2.classList.toggle("div-rotate2");
})
aboutme.addEventListener("click", () => {
  tok.play();
  coverhide.classList.toggle("cover-hide");
  hide.classList.toggle("hide");
  coverhide2.classList.toggle("cover-hide2");
  hamani.classList.toggle("ham-ani");
  divrotate1.classList.toggle("div-rotate1");
  divrotate2.classList.toggle("div-rotate2");
})
contactME.addEventListener("click", () => {
  contactSound.play();
  coverhide.classList.toggle("cover-hide");
  hide.classList.toggle("hide");
  coverhide2.classList.toggle("cover-hide2");
  hamani.classList.toggle("ham-ani");
  divrotate1.classList.toggle("div-rotate1");
  divrotate2.classList.toggle("div-rotate2");
})

linkedin.addEventListener("click", () => {
  coverhide.classList.toggle("cover-hide");
  hide.classList.toggle("hide");
  coverhide2.classList.toggle("cover-hide2");
  hamani.classList.toggle("ham-ani");
  divrotate1.classList.toggle("div-rotate1");
  divrotate2.classList.toggle("div-rotate2");
})

Projects.addEventListener("click", () => {
  waterDrop.play();
  projecttoggle.classList.toggle("project-toggle");
  crosshide.classList.toggle("cross-hide")
  coverhide.classList.toggle("cover-hide");
  hide.classList.toggle("hide");
  coverhide2.classList.toggle("cover-hide2");
  hamani.classList.toggle("ham-ani");
  divrotate1.classList.toggle("div-rotate1");
  divrotate2.classList.toggle("div-rotate2");
})
crosshide.addEventListener("click", () => {
  projecttoggle.classList.toggle("project-toggle")
  crosshide.classList.toggle("cross-hide")
})
crossProject.addEventListener("click", () => {
  waterDrop.play();
})
herocontact.addEventListener("click", () => {
  contactSound.play();
})
// setTimeout(() => {

// }, 700)


crosswlc.addEventListener('click', () => {
  document.querySelector('.welcomeMsg').classList.remove('welcomeAnimation')
  loading.play();
})

arrow.addEventListener('click', () => {
  gotoTop.play();
})