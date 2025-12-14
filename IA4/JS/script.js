document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('buildForm');
    const formMessage = document.getElementById('formMessage');

    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            if (name && email && subject && message) {
                formMessage.innerHTML = '<div class="alert alert-success">Thanks ' + name + '! Your message has been sent. We\'ll get back to you at <u>' + email + '</u> soon.</div>';
                form.reset();
            } else {
                formMessage.innerHTML = '<div class="alert alert-danger">Please fill out all fields.</div>';
            }
        });
    }
});

const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', function () {
    if (window.scrollY > 150) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const darkModeToggle = document.getElementById('darkModeToggle');

if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    darkModeToggle.textContent = 'Light Mode';
}

darkModeToggle.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = 'Light Mode';
        localStorage.setItem('darkMode', 'enabled');
    } else {
        darkModeToggle.textContent = 'Dark Mode';
        localStorage.setItem('darkMode', 'disabled');
    }
});

const typedText = document.getElementById('typed-text');
const textToType = 'PCBuilderBase';
let index = 0;

function typeText() {
    if (index < textToType.length) {
        typedText.textContent += textToType.charAt(index);
        index++;
        setTimeout(typeText, 100);
    }
}

typeText();