
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());

    fetch('http://localhost:3000/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)

    }).then((response) => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.text();
    })
        .then((data) => {
            document.getElementById('responseMessage').innerText = 'Message sent successfully!';
            document.getElementById('contactForm').reset();
        })
        .catch((error) => {
            console.log('There was a problem with the fetch operation:', error);
        })

});
