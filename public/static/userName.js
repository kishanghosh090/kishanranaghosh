/** @format */

// user name input start

document.addEventListener("DOMContentLoaded", function () {
  const coverhide = document.querySelector(".cover-hide");
  const coverhide2 = document.querySelector(".cover-hide2");
  const hide = document.querySelector(".hide");
  const hamani = document.querySelector(".ham-ani");
  const divrotate1 = document.querySelector(".div-rotate1");
  const divrotate2 = document.querySelector(".div-rotate2 ");
  const userNameContainer = document.querySelector(".userName");
  const usernameinput = document.querySelector("#username-input");
  const userNamebtn = document.querySelector(".userName-btn");
  const DynamicName = document.querySelector(".DynamicName");
  const contactform = document.querySelector(".contact-form");
  const skipButton = document.querySelector(".skip");

  skipButton.addEventListener("click", () => {
    new Audio("./audio/LDModeChange.mp3").play();
    document.querySelector(".userName").classList.add("userName-hide");
    document.querySelector(".welcomeMsg").classList.add("welcomeAnimation");
  });

  const resetUserNamebtn1 = document.querySelector(".resetUserName-btn1");
  const resetUserNamebtn2 = document.querySelector(".resetUserName-btn2");

  if (JSON.parse(localStorage.getItem("portfolio")) !== null) {
    document.querySelector(".reset-btn-nav").classList.remove("hidden");

    document.querySelector(".resetUserName").classList.remove("hidden");
    document.querySelector(".userName").classList.add("userName-hide");
    document.querySelector(".welcomeMsg").classList.add("welcomeAnimation");
  }

  userNameContainer.classList.remove("hidden"); // unhide the user name container
  let userName = JSON.parse(localStorage.getItem("portfolio")) || [];
  userName.forEach((name) => {
    renderTasks(name);
  });

  userNamebtn.addEventListener("click", () => {
    const nameText = usernameinput.value.trim();
    if (nameText === "") return;
    new Audio("./audio/landing.mp3").play();
    const name = {
      id: Date.now(),
      name: nameText,
      completed: false,
    };
    userName.push(name);
    saveTasks();
    renderTasks(name);
    usernameinput.value = "";
    document.querySelector(".reset-btn-nav").classList.remove("hidden");
    document.querySelector(".resetUserName").classList.remove("hidden");
    document.querySelector(".userName").classList.add("userName-hide");
    document.querySelector(".welcomeMsg").classList.add("welcomeAnimation");
  });

  function renderTasks(name) {
    console.log(name.name);
    DynamicName.innerText = name.name;
    contactform.value = name.name.toUpperCase();
  }

  function saveTasks() {
    localStorage.setItem("portfolio", JSON.stringify(userName));
  }

  // reset user name
  resetUserNamebtn1.addEventListener("click", () => {
    coverhide.classList.toggle("cover-hide");
    hide.classList.toggle("hide");
    coverhide2.classList.toggle("cover-hide2");
    hamani.classList.toggle("ham-ani");
    divrotate1.classList.toggle("div-rotate1");
    divrotate2.classList.toggle("div-rotate2");
    resetUserName();
  });
  resetUserNamebtn2.addEventListener("click", () => {
    resetUserName();
  });
  //reset user name
  function resetUserName() {
    document.querySelector(".userName").classList.remove("userName-hide");
    document.querySelector(".welcomeMsg").classList.remove("welcomeAnimation");
    DynamicName.innerText = "";
    contactform.value = "";
    document.querySelector(".reset-btn-nav").classList.add("hidden");
    document.querySelector(".resetUserName").classList.add("hidden");
    localStorage.removeItem("portfolio");
  }
});
// user name innput end
