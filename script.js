document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".slideshow-container");
    
    // Number of slides
    const totalSlides = 23;
    let currentSlide = 0;

    // Create image element
    const imgElement = document.createElement("img");
    imgElement.src = `images/Slide1.PNG`; // Start with the first slide
    imgElement.alt = "Slide 1";
    imgElement.style.width = "100%"; // Adjust as needed
    container.appendChild(imgElement);

    // Function to change slides
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides; // Loop back to 0 after 23
        imgElement.src = `images/Slide${currentSlide + 1}.PNG`; // Update image
        imgElement.alt = `Slide ${currentSlide + 1}`;
    }

    // Change slides every 3 seconds
    setInterval(nextSlide, 3000);
});
