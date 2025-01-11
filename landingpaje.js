

//testimonial//
const container = document.getElementById("testimonial-container");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let index = 0;

    function updateCarousel() {
      container.style.transform = `translateX(-${index * 100}%)`;
    }

    prevBtn.addEventListener("click", () => {
      index = (index - 1 + 3) % 3; // Loop backward
      updateCarousel();
    });

    nextBtn.addEventListener("click", () => {
      index = (index + 1) % 3; // Loop forward
      updateCarousel();
    });

    //