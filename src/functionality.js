// Back to Top Button
const topBtn = document.getElementById("backToTop");

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        topBtn.classList.add("active");
    } else {
        topBtn.classList.remove("active");
    }
};

topBtn.onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
};

// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
    const email = document.getElementById("email").value;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        event.preventDefault();
    } else {
        alert("Form submitted successfully!");
    }
});

// Toggle Side Menu
const menuBtn = document.getElementById('mobile-menu');
const sideNav = document.getElementById('side-nav');

menuBtn.addEventListener('click', () => {
    sideNav.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        sideNav.classList.remove('active');
    });
});

// Theme toggling
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

if (htmlElement.classList.contains('dark-mode')) {
    themeToggle.textContent = 'Switch to Light';
} else {
    themeToggle.textContent = 'Switch to Dark';
}

themeToggle.addEventListener('click', () => {
    htmlElement.classList.toggle('dark-mode');
    
    if (htmlElement.classList.contains('dark-mode')) {
        themeToggle.textContent = 'Switch to Light';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.textContent = 'Switch to Dark';
        localStorage.setItem('theme', 'light');
    }
});

// Fade-in on scroll logic
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach((element) => {
    observer.observe(element);
});