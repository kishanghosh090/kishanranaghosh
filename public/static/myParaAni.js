document.addEventListener("DOMContentLoaded", () => {
  const skipButton = document.querySelector(".skip");
  const userNamebtn = document.querySelector(".userName-btn");

  const myPara = `I am a Developer, and I love to drink coffee, I live in Malda.Passinate React JS developer with 2 year of experience, dedicated to make impressive web experience and solving complex challenges.`;

  const paraArray = Array.from(myPara);

  const HTMLPARA = document.querySelector(".para");

  let index = 0;
  let isValid = true;
  if (JSON.parse(localStorage.getItem("portfolio")) !== null) {
    HTMLPARA.textContent = `${myPara}`;
  }
  skipButton.addEventListener("click", () => {
    if (isValid) {
      setInterval(() => {
        if (index < paraArray.length) {
          console.log(paraArray[index]);
          HTMLPARA.append(paraArray[index]);
          index++;
        } else {
          isValid = false;
          return;
        }
      }, 50);
    } else {
      return;
    }
  });

  userNamebtn.addEventListener("click", () => {
    if (isValid) {
      setInterval(() => {
        if (index < paraArray.length) {
          console.log(paraArray[index]);
          HTMLPARA.append(paraArray[index]);
          index++;
        } else {
          isValid = false;
          return;
        }
      }, 50);
    } else {
      return;
    }
  });
});
