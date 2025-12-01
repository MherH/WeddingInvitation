// Music Control
const musicToggle = document.getElementById('musicToggle');
const backgroundMusic = document.getElementById('backgroundMusic');
const musicIcon = document.getElementById('musicIcon');
const muteIcon = document.getElementById('muteIcon');
const soundWave = document.getElementById('soundWave');

let isPlaying = false;

// Try to play music on page load
window.addEventListener('DOMContentLoaded', () => {
    // Attempt to play music (may require user interaction on some browsers)
    const playPromise = backgroundMusic.play();
    
    if (playPromise !== undefined) {
        playPromise
            .then(() => {
                isPlaying = true;
                updateMusicIcon();
            })
            .catch(error => {
                // Autoplay was prevented, user will need to click to play
                console.log('Autoplay prevented:', error);
                isPlaying = false;
                updateMusicIcon();
            });
    }
});

musicToggle.addEventListener('click', () => {
    if (isPlaying) {
        backgroundMusic.pause();
        isPlaying = false;
    } else {
        backgroundMusic.play();
        isPlaying = true;
    }
    updateMusicIcon();
});

function updateMusicIcon() {
    if (isPlaying) {
        musicIcon.style.display = 'block';
        muteIcon.style.display = 'none';
        soundWave.style.opacity = '1';
    } else {
        musicIcon.style.display = 'none';
        muteIcon.style.display = 'block';
        soundWave.style.opacity = '0.3';
    }
}

// Image Gallery - Update these with your actual photo filenames
const galleryImages = [
    'images/photo1.jpg',
    'images/photo2.jpg',
    'images/photo3.jpg',
    'images/photo4.jpg',
    'images/photo5.jpg',
    'images/photo6.jpg',
    'images/photo7.jpg',
    'images/photo8.jpg',
    'images/photo9.jpg'
];

let currentImageIndex = 0;
let validImages = []; // Will store only images that successfully load
const mainImage = document.getElementById('mainImage');
const thumbnailContainer = document.getElementById('thumbnailContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Check which images actually exist and load
function checkImageExists(imageSrc, index) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve({ src: imageSrc, index: index, exists: true });
        img.onerror = () => resolve({ src: imageSrc, index: index, exists: false });
        img.src = imageSrc;
    });
}

// Initialize gallery
async function initGallery() {
    // Check all images and filter to only valid ones
    const imageChecks = await Promise.all(
        galleryImages.map((img, idx) => checkImageExists(img, idx))
    );
    
    validImages = imageChecks
        .filter(check => check.exists)
        .map(check => ({ src: check.src, originalIndex: check.index }));
    
    // If no valid images, show placeholder
    if (validImages.length === 0) {
        const placeholder = document.getElementById('galleryPlaceholder');
        if (placeholder) placeholder.style.display = 'flex';
        mainImage.style.display = 'none';
        return;
    }
    
    // Reset to first valid image
    currentImageIndex = 0;
    
    // Create thumbnails only for valid images
    validImages.forEach((imageData, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = 'thumbnail' + (index === 0 ? ' active' : '');
        const img = document.createElement('img');
        img.src = imageData.src;
        img.alt = `Gallery Image ${index + 1}`;
        thumbnail.appendChild(img);
        thumbnail.addEventListener('click', () => goToImage(index));
        thumbnailContainer.appendChild(thumbnail);
    });
    
    // Set initial image
    updateMainImage();
}

function updateMainImage() {
    // If no valid images, don't update
    if (validImages.length === 0) {
        return;
    }
    
    const imageData = validImages[currentImageIndex];
    const placeholder = document.getElementById('galleryPlaceholder');
    
    // Hide placeholder, show image
    if (placeholder) placeholder.style.display = 'none';
    mainImage.style.display = 'block';
    
    // Preload image for smooth transition
    const img = new Image();
    img.onload = function() {
        mainImage.src = imageData.src;
        mainImage.classList.add('loaded');
    };
    img.onerror = function() {
        // If image fails to load, try to skip to next
        if (validImages.length > 1) {
            nextImage();
        }
    };
    img.src = imageData.src;
    
    // Update active thumbnail
    const thumbnails = thumbnailContainer.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumb, index) => {
        if (index === currentImageIndex) {
            thumb.classList.add('active');
        } else {
            thumb.classList.remove('active');
        }
    });
}

function goToImage(index) {
    if (validImages.length === 0) return;
    if (index >= 0 && index < validImages.length) {
        currentImageIndex = index;
        updateMainImage();
    }
}

function nextImage() {
    if (validImages.length === 0) return;
    currentImageIndex = (currentImageIndex + 1) % validImages.length;
    updateMainImage();
}

function prevImage() {
    if (validImages.length === 0) return;
    currentImageIndex = (currentImageIndex - 1 + validImages.length) % validImages.length;
    updateMainImage();
}

prevBtn.addEventListener('click', prevImage);
nextBtn.addEventListener('click', nextImage);

// Auto-advance gallery (optional)
let galleryInterval;
function startGalleryAutoAdvance() {
    if (validImages.length > 0) {
        galleryInterval = setInterval(nextImage, 5000);
    }
}

function stopGalleryAutoAdvance() {
    clearInterval(galleryInterval);
}

// Start auto-advance, pause on hover
const galleryMain = document.querySelector('.gallery-main');
if (galleryMain) {
    galleryMain.addEventListener('mouseenter', stopGalleryAutoAdvance);
    galleryMain.addEventListener('mouseleave', startGalleryAutoAdvance);
}

// Initialize gallery
initGallery().then(() => {
    startGalleryAutoAdvance();
});

// Countdown Timer
const weddingDate = new Date('2026-06-06T14:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();

// RSVP Form
const rsvpForm = document.getElementById('rsvpForm');

rsvpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('guestName').value,
        attendance: document.getElementById('attendance').value,
        side: document.getElementById('side').value,
        message: document.getElementById('message').value
    };
    
    // Here you would typically send this to a server
    console.log('RSVP Submitted:', formData);
    
    // Show success message
    alert(`Thank you ${formData.name}! Your RSVP has been received. We look forward to celebrating with you!`);
    
    // Reset form
    rsvpForm.reset();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Function to update gallery images (to be called when user provides images)
function updateGalleryImages(newImages) {
    galleryImages.length = 0;
    galleryImages.push(...newImages);
    thumbnailContainer.innerHTML = '';
    currentImageIndex = 0;
    initGallery();
}

// Export function for external use
window.updateGalleryImages = updateGalleryImages;

