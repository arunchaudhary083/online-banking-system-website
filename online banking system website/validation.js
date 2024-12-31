document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Reset error messages
    var formElements = this.elements;
    for (var element of formElements) {
        element.classList.remove('is-invalid');
    }

    var valid = true;

    // Username validation
    if (!username) {
        document.getElementById('username').classList.add('is-invalid');
        valid = false;
    }

    // Email validation
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email || !emailPattern.test(email)) {
        document.getElementById('email').classList.add('is-invalid');
        valid = false;
    }

    // Password validation
    if (!password) {
        document.getElementById('password').classList.add('is-invalid');
        valid = false;
    }

    // Confirm password validation
    if (password !== confirmPassword) {
        document.getElementById('confirmPassword').classList.add('is-invalid');
        valid = false;
    }

    if (valid) {
        alert('Form submitted successfully!');
        // You can send the data to the server via AJAX or fetch API here.
    }
});
