document.addEventListener("DOMContentLoaded", () => {
  // gemini clone
  const geminiProject = {
    name: "Gemini(API) Clone (UI)",
    projectPic: "./assets/gemini-clone.png",
    codeLink: "https://github.com/kishanghosh090/gemini",
    description: `This project is a clone of the Gemini UI, designed to provide
                users with an intuitive and responsive interface Utilizing the
                Gemini API, the application offers real-time data, the interface
                is crafted to mirror the original Gemini platform while
                incorporating unique enhancements for improved usability. Explore
                the power of cryptocurrency trading with this sleek, functional,
                and visually appealing clone`,
  };
  createProject(
    geminiProject.name,
    geminiProject.description,
    geminiProject.codeLink,
    geminiProject.projectPic
  );
  // portfolio ui
  const portfolioUI = {
    name: "Responsive web design (portfolio)",
    projectPic: "./assets/pontfolioUI.png",
    codeLink: "https://github.com/kishanghosh090/kishan-UI",
    description: `this is a simple and attractive portfolio ui with responsive
                design`,
  };

  createProject(
    portfolioUI.name,
    portfolioUI.description,
    portfolioUI.codeLink,
    portfolioUI.projectPic
  );
  // create project function
  function createProject(name, description, getCodeLink, projectPictures) {
    const cards = document.querySelector(".cards");
    const newProject = document.createElement("div");
    newProject.classList.add("card");
    //project name
    const h1 = document.createElement("h1");
    h1.innerText = `${name}`;
    newProject.appendChild(h1);

    //create imge
    const imageProject = document.createElement("img");
    imageProject.setAttribute("src", `${projectPictures}`);
    newProject.appendChild(imageProject);

    //description

    const descriptionText = document.createElement("div");
    descriptionText.classList.add("description");
    descriptionText.innerText = `${description}`;
    newProject.appendChild(descriptionText);

    // get code btn
    const getCodeBtn = document.createElement("a");
    getCodeBtn.classList.add("getCodeBtn");
    getCodeBtn.setAttribute("href", `${getCodeLink}`);
    getCodeBtn.innerText = "Get Code";
    newProject.append(getCodeBtn);

    cards.appendChild(newProject);
  }
});
