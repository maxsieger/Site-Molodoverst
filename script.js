    let slideIndex = 0;
    showSlides();

    function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slides")[0].getElementsByTagName("img");
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slideIndex++;
    
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 20000000); // Изменение изображения каждые 2 секунды
    }

    document.querySelector(".prev").addEventListener("click", function() {
    slideIndex -= 2;
    if (slideIndex < 0) {
        slideIndex = 2;
    }
    showSlides();
    });

    document.querySelector(".next").addEventListener("click", function() {
    showSlides();
    });