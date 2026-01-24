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

// Carousel Certificates
const carouselSlide = document.querySelector('.carousel-slide');
const certItems = document.querySelectorAll('.cert-item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let counter = 0;

nextBtn.addEventListener('click', () => {
    if (counter >= certItems.length - 1) {
        counter = 0;
    } else {
        counter++;
    }
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) {
        counter = certItems.length - 1;
    } else {
        counter--;
    }
    updateCarousel();
});

function updateCarousel() {
    const size = certItems[0].clientWidth;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    adjustHeight();
}

function adjustHeight() {
    const container = document.querySelector('.carousel-container');
    const currentImg = certItems[counter].querySelector('img');
    
    if (currentImg) {
        container.style.height = currentImg.clientHeight + "px";
    }
}

window.addEventListener('load', adjustHeight);
window.addEventListener('resize', () => {
    updateCarousel();
    adjustHeight();
});

// Awards Certificates
const carouselawardsSlide = document.querySelector('.carousel-slide-awards');
const awardItems = document.querySelectorAll('.award-item');
const prevBtnAward = document.getElementById('prevBtnAward');
const nextBtnAward = document.getElementById('nextBtnAward');

let counter2 = 0;

nextBtnAward.addEventListener('click', () => {
    if (counter2 >= awardItems.length - 1) {
        counter2 = 0;
    } else {
        counter2++;
    }
    updateCarouselAward();
});

prevBtnAward.addEventListener('click', () => {
    if (counter2 <= 0) {
        counter2 = awardItems.length - 1;
    } else {
        counter2--;
    }
    updateCarouselAward();
});

const awardCaptions = [
    "AT&T Connection Award - Developing a mobile application from scratch that helped 5000+ employees",
    "AT&T Sprint-a-thon Award - Securing first place in AT&T's sprint-a-thon",
    "AT&T Making a Difference Award - Also for developing the mobile application that helped ease the job of several people"
];

const captionElement = document.getElementById('award-caption-text');

function updateCarouselAward() {
    const size = awardItems[0].clientWidth;
    carouselawardsSlide.style.transform = 'translateX(' + (-size * counter2) + 'px)';
    
    if (captionElement) {
        captionElement.textContent = awardCaptions[counter2];
    }
    
    adjustHeightAward();
}

function adjustHeightAward() {
    const container = document.querySelector('.carousel-container-awards');
    const currentImgAward = awardItems[counter2].querySelector('img');
    
    if (currentImgAward) {
        container.style.height = currentImgAward.clientHeight + "px";
    }
}

window.addEventListener('load', adjustHeightAward);
window.addEventListener('resize', () => {
    updateCarouselAward();
    adjustHeightAward();
});

// OS COIN FLIP
const osCoin = document.querySelector('.os-coin-container');

if (osCoin) {
    osCoin.addEventListener('click', function(e) {
        // Toggles the flip state on every click/tap
        this.classList.toggle('flipped');
    });
}