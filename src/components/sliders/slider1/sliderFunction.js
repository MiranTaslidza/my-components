// sliderFunctions.js
export function plusSlides(n, slideIndex, setSlideIndex, slides, dots) {
    let newIndex = slideIndex + n;
    if (newIndex > slides.length) {
      newIndex = 1; // Vraćanje na prvi slajd ako je prešao broj slajdova
    }
    setSlideIndex(newIndex);
  }
  
  export function currentSlide(n, setSlideIndex, slides, dots) {
    if (n > slides.length || n < 1) {
      return; // Ignorisati pogrešne vrednosti n
    }
    setSlideIndex(n);
  }
  
  export function showSlides(n, slides, dots, slideIndex) {
        let i; 

    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
  
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
  
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }
  
  export function autoshowSlides(slides, slideIndex, setSlideIndex) {
    let i;
    for ( i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(() => autoshowSlides(slides, slideIndex, setSlideIndex), 3000);
  }
  