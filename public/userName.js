/** @format */

// user name input start

document.addEventListener("DOMContentLoaded", function () {
  const userNameContainer = document.querySelector(".userName");
  const usernameinput = document.querySelector("#username-input");
  const userNamebtn = document.querySelector(".userName-btn");
  const DynamicName = document.querySelector(".DynamicName");
  const contactform = document.querySelector(".contact-form");
  const resetUserNamebtn = document.querySelector(".resetUserName-btn");
  if (JSON.parse(localStorage.getItem("portfolio")) !== null) {
    document.querySelector(".userName").style.display = "none";
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
    const name = {
      id: Date.now(),
      name: nameText,
      completed: false,
    };
    userName.push(name);
    saveTasks();
    renderTasks(name);
    usernameinput.value = "";
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
  resetUserNamebtn.addEventListener("click", () => {
    resetUserName();
  });
  //reset user name
  function resetUserName() {
    document.querySelector(".userName").classList.remove("userName-hide");
    document.querySelector(".welcomeMsg").classList.remove("welcomeAnimation");
    contactform.value = "";
    localStorage.removeItem("portfolio");
  }
});
// user name innput end
