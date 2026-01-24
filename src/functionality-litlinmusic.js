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

// --- AUDIO PLAYBAR LOGIC ---
const playbar = document.getElementById('audio-playbar');
const audioPlayer = document.getElementById('global-audio-player');
const playbarToggle = document.getElementById('playbar-toggle');
const playbarLabel = document.getElementById('playbar-label');
const playbarThumb = document.getElementById('playbar-thumb');
const playbarLink = document.getElementById('playbar-link');

let currentAudioSrc = "";

document.querySelectorAll('.audio-trigger').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const audioSrc = this.getAttribute('data-audio');
        const thumbSrc = this.getAttribute('data-thumb');
        const youtubeUrl = this.getAttribute('href');
        const songTitle = this.getAttribute('data-title');

        playbarLabel.innerText = songTitle;

        // Reset the animation by briefly removing and re-adding it
        playbarLabel.style.animation = 'none';
        playbarLabel.offsetHeight; // Trigger reflow
        playbarLabel.style.animation = 'marquee 10s linear infinite';

        if (currentAudioSrc === audioSrc) {
            hidePlaybar(); 
        } else {
            currentAudioSrc = audioSrc;
            audioPlayer.src = audioSrc;
            playbarThumb.src = thumbSrc;
            playbarLink.href = youtubeUrl;
            playbarLabel.innerText = songTitle;
            
            playbar.classList.add('active');
            audioPlayer.play();
            updatePlayIcon(true);
        }
    });
});

function updatePlayIcon(isPlaying) {
    playbarToggle.innerHTML = isPlaying ? '<i class="fas fa-pause"></i>' : '<i class="fas fa-play"></i>';
}

playbarToggle.addEventListener('click', (event) => {
    event.stopPropagation(); 
    
    if (audioPlayer.paused) {
        audioPlayer.play();
        updatePlayIcon(true);
    } else {
        audioPlayer.pause();
        updatePlayIcon(false);
    }
});

audioPlayer.onended = hidePlaybar

function hidePlaybar() {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
    currentAudioSrc = "";
    playbar.classList.remove('active');
    updatePlayIcon(false);
}

document.addEventListener('click', function(event) {
    const langSection = document.getElementById('favoldlanguages');
    const isClickInsideSection = langSection.contains(event.target);
    const isClickInsidePlaybar = playbar.contains(event.target);
    const isClickInsideNav = sideNav.contains(event.target);
    const isClickOnMenuBtn = menuBtn.contains(event.target);
    const isClickOnThemeToggle = themeToggle.contains(event.target);
    const isClickOnTopBtn = topBtn.contains(event.target);

    if (!isClickInsideSection && !isClickInsidePlaybar && !isClickInsideNav && !isClickOnMenuBtn && !isClickOnThemeToggle && !isClickOnTopBtn) {
        hidePlaybar();
    }
});

homeBtn.addEventListener('click', hidePlaybar);
playbarThumb.addEventListener('click', hidePlaybar);