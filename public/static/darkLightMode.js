/** @format */

const LDButton = document.querySelector(".Light-Dark-Mode");
const ball = document.querySelector(".ball");
const body = document.querySelector("body");
const usernamecontainer = document.querySelector(".username-container");
const home = document.querySelector("#home");
const div1 = document.querySelector(".div1");
const div2 = document.querySelector(".div2");
const hero = document.querySelector("#hero");
const welcomeMsg = document.querySelector(".welcomeMsg");
const gradient = document.querySelector(".gradient");
const edu = document.querySelector(".education");
const iitm = document.querySelector(".iitm");
const gour = document.querySelector(".gour");
const about = document.querySelector(".about");
const skills = document.querySelectorAll(".skill");
const aboutHeading = document.querySelector(".aboutHeading");
const gradientabout = document.querySelector(".gradient-about");
const contactme = document.querySelector(".contactme");
const footer = document.querySelector(".footer");
const bxuparrowcircle = document.querySelectorAll(".bx-Light");
const iphone = document.querySelector(".iphone");

//variable for light and dark mode

let LDArr = JSON.parse(localStorage.getItem("Light-Dark")) || [];
if (LDArr[0] == undefined) {
  toDarkMode();
} else if (LDArr[0] == 0) {
  toDarkMode();
} else if (LDArr[0] == 1) {
  toLightMode();
}

LDButton.addEventListener("click", () => {
  new Audio("./audio/LDModeChange.mp3").play();
  if (LDArr[0] == undefined) {
    LDArr[0] = 1;

    toLightMode();
    saveLD();
  } else if (LDArr[0] == 0) {
    LDArr[0] = 1;
    toLightMode();

    saveLD();
  } else if (LDArr[0] == 1) {
    LDArr[0] = 0;
    toDarkMode();

    saveLD();
  }
});

function toLightMode() {
  ball.classList.add("ball-ani");
  body.classList.add("LightMode-body");
  usernamecontainer.classList.add("LightMode-for-userNamr-container");
  home.classList.add("LightModeNavBar");
  div1.classList.add("LightMode-ham");
  div2.classList.add("LightMode-ham");
  hero.classList.add("LightMode-body");
  welcomeMsg.classList.add("LightMode-WelcMsg");
  gradient.classList.add("LightMode-gradient");
  edu.classList.add("LightMode-body");
  iitm.classList.add("LightMode-for-userNamr-container");
  gour.classList.add("LightMode-for-userNamr-container");
  about.classList.add("LightMode-body");
  aboutHeading.classList.add("LightMode-body");
  gradientabout.classList.add("LightMode-gradient");
  contactme.classList.add("LightMode");
  footer.classList.add("LightMode-body");
  bxuparrowcircle.forEach((bx) => {
    bx.classList.add("LightMode-body");
  });
  skills.forEach((skill) => {
    skill.classList.add("LightMode-for-userNamr-container");
  });
  iphone.setAttribute("src", "./assets/dark.svg");
}
function toDarkMode() {
  ball.classList.remove("ball-ani");
  body.classList.remove("LightMode-body");
  usernamecontainer.classList.remove("LightMode-for-userNamr-container");
  home.classList.remove("LightModeNavBar");
  div1.classList.remove("LightMode-ham");
  div2.classList.remove("LightMode-ham");
  hero.classList.remove("LightMode-body");
  welcomeMsg.classList.remove("LightMode-WelcMsg");
  gradient.classList.remove("LightMode-gradient");
  edu.classList.remove("LightMode-body");
  iitm.classList.remove("LightMode-for-userNamr-container");
  gour.classList.remove("LightMode-for-userNamr-container");
  about.classList.remove("LightMode-body");

  aboutHeading.classList.remove("LightMode-body");
  gradientabout.classList.remove("LightMode-gradient");
  contactme.classList.remove("LightMode");
  footer.classList.remove("LightMode-body");
  bxuparrowcircle.forEach((bx) => {
    bx.classList.remove("LightMode-body");
  });
  skills.forEach((skill) => {
    skill.classList.remove("LightMode-for-userNamr-container");
  });
  iphone.setAttribute("src", "./assets/white.svg");
}
function saveLD() {
  localStorage.setItem("Light-Dark", JSON.stringify(LDArr));
}
