// user name input start
const usernameinput = document.querySelector("#username-input")
const userNamebtn = document.querySelector(".userName-btn")
const DynamicName = document.querySelector(".DynamicName")
const contactform = document.querySelector(".contact-form")
if (JSON.parse(localStorage.getItem('portfolio')) !== null) {
    document.querySelector('.userName').style.display = 'none'
    document.querySelector('.welcomeMsg').classList.add('welcomeAnimation')
    // renderTasks()
}
let userName = JSON.parse(localStorage.getItem('portfolio')) || []
userName.forEach((name) => {
    renderTasks(name)
})

userNamebtn.addEventListener('click', () => {
    const nameText = usernameinput.value.trim()
    if (nameText === "") return;
    const name = {
        id: Date.now(),
        name: nameText,
        completed: false,
    }
    userName.push(name)
    saveTasks()
    renderTasks(name)
    document.querySelector('.userName').classList.add('userName-hide')
    document.querySelector('.welcomeMsg').classList.add('welcomeAnimation')
})

function renderTasks(name) {
    console.log(name.name)
    DynamicName.innerText = name.name
    contactform.value = name.name.toUpperCase()
}


function saveTasks() {
    localStorage.setItem('portfolio', JSON.stringify(userName))
}





// user name innput end