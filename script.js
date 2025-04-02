let slideIndex = 0;
const totalSlides = 23; // You have 23 slides

// Function to create the slides dynamically
function createSlides() {
    const container = document.querySelector('.slideshow-container');
    for (let i = 1; i <= totalSlides; i++) {
        const slideDiv = document.createElement('div');
        slideDiv.classList.add('slide', 'fade');
        slideDiv.innerHTML = `<img src="images/Slide${i}.png" alt="Slide ${i}">`;
        container.appendChild(slideDiv);
    }
}

// Function to show slides in rotation
function showSlides() {
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 } // Loop back to first slide
    slides[slideIndex - 1].style.display = "block"; // Show the current slide
    setTimeout(showSlides, 2000); // Change slide every 2 seconds
}

// Initialize the slideshow
createSlides();
showSlides();
