let slideIndex = 0;

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Auto-play the slideshow
setInterval(function() {
    plusSlides(1);
}, 5000); // Change 5000 to the desired interval in milliseconds

function uploadImages() {
    const fileInput = document.getElementById('fileInput');
    const files = fileInput.files;
    const slideshowContainer = document.querySelector('.slideshow-container');

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onload = function(e) {
            const slide = document.createElement('div');
            slide.className = 'mySlides fade';
            const img = document.createElement('img');
            img.src = e.target.result;
            slide.appendChild(img);
            slideshowContainer.appendChild(slide);
        }

        reader.readAsDataURL(file);
    }

    showSlides(slideIndex);
}
