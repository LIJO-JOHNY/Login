window.onload = function () {
    var loggedIn = sessionStorage.getItem('loggedIn');
    if (loggedIn) {
        document.getElementById('welcome-container').style.display = 'block';
        document.getElementById('user_name').innerText = sessionStorage.getItem('name');
    }
};

function register() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (name === '') {
        name = "User";
    }

    if (email === '') {
        email = "example@example.com";
    }

    if (password === '') {
        password = "password";
    }

    sessionStorage.setItem('name', name);
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('password', password);

    document.getElementById('registration-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
}

function login() {
    var email = document.getElementById('login-email').value;
    var password = document.getElementById('login-password').value;

    var storedEmail = sessionStorage.getItem('email');
    var storedPassword = sessionStorage.getItem('password');

    if (email !== storedEmail || password !== storedPassword) {
        alert('Invalid email or password');
        return false;
    }

    sessionStorage.setItem('loggedIn', 'true');

    document.getElementById('login-container').style.display = 'none';
    document.getElementById('welcome-container').style.display = 'block';
    document.getElementById('user_name').innerText = sessionStorage.getItem('name');

    return false;
}

function validateRegistration() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (name === '' || email === '' || password === '') {
        alert('Please fill out all fields');
        return false;
    }

    register();

    return false;
}

function logout() {
    sessionStorage.removeItem('loggedIn');
    document.getElementById('welcome-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
}

function showLogin() {
    document.getElementById('registration-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
}

function showRegistration() {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('registration-container').style.display = 'block';
}
