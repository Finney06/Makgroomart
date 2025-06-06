const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  });
}

if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  });
}

let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')

let slider = document.querySelector('.slider')
let sliderList = slider.querySelector('.slider .list')
let thumbnail = document.querySelector('.slider .thumbnail')
let thumbnailItems = thumbnail.querySelectorAll('.item')

thumbnail.appendChild(thumbnailItems[0])

// Function for next button 
nextBtn.onclick = function () {
  moveSlider('next')
}

let autoSlide = setInterval(() => {
  moveSlider('next');
}, 6000);


// Function for prev button 
prevBtn.onclick = function () {
  moveSlider('prev')
}

slider.addEventListener('mouseenter', () => clearInterval(autoSlide));
slider.addEventListener('mouseleave', () => {
    autoSlide = setInterval(() => {
        moveSlider('next');
    }, 6000);
});

function moveSlider(direction) {
  let sliderItems = sliderList.querySelectorAll('.item')
  let thumbnailItems = document.querySelectorAll('.thumbnail .item')

  if (direction === 'next') {
    sliderList.appendChild(sliderItems[0])
    thumbnail.appendChild(thumbnailItems[0])
    slider.classList.add('next')
  } else {
    sliderList.prepend(sliderItems[sliderItems.length - 1])
    thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1])
    slider.classList.add('prev')
  }


  slider.addEventListener('animationend', function () {
    if (direction === 'next') {
      slider.classList.remove('next')
    } else {
      slider.classList.remove('prev')
    }
  }, { once: true }) // Remove the event listener after it's triggered once
}

  function updateCartCount() {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    document.querySelectorAll(".cart-count").forEach(badge => {
      badge.textContent = cartItems.length;
    });
  }

  updateCartCount()