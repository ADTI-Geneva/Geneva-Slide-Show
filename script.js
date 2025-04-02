let slideIndex = 0;
const totalSlides = 23;

function createSlides() {
    const container = document.querySelector('.slideshow-container');
    for (let i = 1; i <= totalSlides; i++) {
        const slideDiv = document.createElement('div');
        slideDiv.classList.add('slide', 'fade');
        const img = document.createElement('img');
        img.src = `Slide${i}.PNG`;  // Remove "images/" if they are in the root
        img.alt = `Slide ${i}`;

        img.onerror = function() {
            console.error(`Image not found: Slide${i}.PNG`);
        };

        slideDiv.appendChild(img);
        container.appendChild(slideDiv);
    }
}

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 } 
    slides[slideIndex - 1].style.display = "block"; 
    setTimeout(showSlides, 2000); 
}

createSlides();
showSlides();
