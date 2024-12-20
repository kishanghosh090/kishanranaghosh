const audio = new Audio("./audio/audio.mp3");
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    document.querySelector(".contactLoader").classList.remove("hidden");
    event.preventDefault();
    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());
    fetch("https://kishanranaghosh.onrender.com/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");

        return response.text();
      })
      .then((data) => {
        document.getElementById("responseMessage").innerText =
          "Message sent successfully!";
        audio.play();
        document.querySelector(".contactLoader").classList.add("hidden");
        document.getElementById("contactForm").reset();
      })
      .catch((error) => {
        console.log("There was a problem with the fetch operation:", error);
      });
  });
