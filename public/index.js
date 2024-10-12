// loader
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.loader').setAttribute('class', 'loader-hide');

})
const loading = new Audio("./assets/landing.mp3");
const hamSound = new Audio("./assets/ham.wav");
const contactSound = new Audio("./assets/contact.wav");
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
const crosswlc = document.querySelector('.cross-wlc')
const herocontact = document.querySelector(".hero-contact")
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
  coverhide.classList.toggle("cover-hide");
  hide.classList.toggle("hide");
  coverhide2.classList.toggle("cover-hide2");
  hamani.classList.toggle("ham-ani");
  divrotate1.classList.toggle("div-rotate1");
  divrotate2.classList.toggle("div-rotate2");
})
aboutme.addEventListener("click", () => {
  coverhide.classList.toggle("cover-hide");
  hide.classList.toggle("hide");
  coverhide2.classList.toggle("cover-hide2");
  hamani.classList.toggle("ham-ani");
  divrotate1.classList.toggle("div-rotate1");
  divrotate2.classList.toggle("div-rotate2");
})
contactME.addEventListener("click", () => {
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
herocontact.addEventListener("click", () => {
  contactSound.play();
})
setTimeout(() => {
  document.querySelector('.welcomeMsg').classList.add('welcomeAnimation')
}, 700)


crosswlc.addEventListener('click', () => {
  document.querySelector('.welcomeMsg').classList.remove('welcomeAnimation')
  loading.play();
})