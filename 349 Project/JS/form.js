function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert("Message sent!");
        return true;
    }
    alert("Please fill out all fields.");
    return false;
}
