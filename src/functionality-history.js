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

// Home button
const homeBtn = document.getElementById("homeButton");

window.addEventListener('load', () => {
    homeBtn.classList.add("active");
});

homeBtn.onclick = function() {
    window.location.href = 'home.html';
};

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

// Awards Certificates
const carouselSlide = document.querySelector('.carousel-slide');
const hisfigItems = document.querySelectorAll('.hisfig-item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let counter2 = 0;

nextBtn.addEventListener('click', () => {
    if (counter2 >= hisfigItems.length - 1) {
        counter2 = 0;
    } else {
        counter2++;
    }
    updateCarouselAward();
});

prevBtn.addEventListener('click', () => {
    if (counter2 <= 0) {
        counter2 = hisfigItems.length - 1;
    } else {
        counter2--;
    }
    updateCarouselAward();
});

const awardCaptions = [
    "Benjamin Franklin (Reason: Compassionate and Wise)",
    "President John Adams (Reason: Wise and Hard Working)",
    "President Abraham Lincoln (Reason: Saved the Union)",
    "The Duke of Wellington - Sir Arthur Wellesley (Reason: Man of immense valor)",
    "Wolfgang Amadeus Mozart (Reason: Wonderful music composer and child prodigy)",
    "Ludwig Van Beethoven (Reason: Composed wonderful music even after going deaf)",
    "Gaius Julius Caesar Octavianus/Augustus Caesar (Reason: Made the Roman Empire mighty)"
];

const captionElement = document.getElementById('caption-text');

function updateCarouselAward() {
    const size = hisfigItems[0].clientWidth;
    carouselSlide.style.transform = 'translateX(' + (-size * counter2) + 'px)';
    
    if (captionElement) {
        captionElement.textContent = awardCaptions[counter2];
    }
    
    adjustHeightAward();
}

function adjustHeightAward() {
    const container = document.querySelector('.carousel-container');
    const currentImgAward = hisfigItems[counter2].querySelector('img');
    
    if (currentImgAward) {
        container.style.height = currentImgAward.clientHeight + "px";
    }
}

window.addEventListener('load', adjustHeightAward);
window.addEventListener('resize', () => {
    updateCarouselAward();
    adjustHeightAward();
});