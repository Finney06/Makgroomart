document.addEventListener("DOMContentLoaded", () => {
  const filterToggle = document.getElementById("filterToggle");
  const filterOverlay = document.getElementById("filterOverlay");
  const closeBtn = document.getElementById("closeFilterOverlay");
  const pageOverlay = document.getElementById("pageOverlay");
  const chipContainer = document.getElementById("activeFilters");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const clearAllBtn = document.getElementById("clearAllFilters");
  const filterCountBadge = document.getElementById("filterCountBadge");
  const seeMoreBtns = document.querySelectorAll(".see-more-btn");
  const backBtns = document.querySelectorAll(".back-to-products");
  //  const outer = document.querySelector(".outer");
  // const slides = document.querySelectorAll(".inner");

  // let currentIndex = 0;

  //   setInterval(() => {
  //     currentIndex = (currentIndex + 1) % slides.length;
  //     outer.scrollTo({
  //       left: outer.clientWidth * currentIndex,
  //       behavior: "smooth"
  //     });
  //   }, 6000);

  const activeFilters = new Set(); // To track selected categories

  function toggleFilterDropdown(forceClose = false) {
    const isActive = filterOverlay.classList.contains("active");

    if (isActive || forceClose) {
      filterOverlay.classList.remove("active");
      filterToggle.classList.remove("active");
      pageOverlay.classList.remove("blurred");
    } else {
      filterOverlay.classList.add("active");
      filterToggle.classList.add("active");
      pageOverlay.classList.add("blurred");
    }
  }

  filterToggle.addEventListener("click", () => toggleFilterDropdown());
  closeBtn.addEventListener("click", () => toggleFilterDropdown(true));

  // 🔘 On category button click, create chip
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const category = btn.textContent.trim();
      const key = category.toLowerCase();

      if (!activeFilters.has(key)) {
        activeFilters.add(key);
        createChip(category, key);
        updateFilterCount();
      }
    });
  });

  // 🔘 Create chip element
  function createChip(label, key) {
    const chip = document.createElement("div");
    chip.classList.add("chip");
    chip.dataset.category = key;
    chip.innerHTML = `
      ${label}
      <button class="remove-chip" title="Remove">&times;</button>
    `;
    chipContainer.insertBefore(chip, clearAllBtn); // insert before "Clear All"

    // ❌ Remove chip on click
    chip.querySelector(".remove-chip").addEventListener("click", () => {
      chip.remove();
      activeFilters.delete(key);
      updateFilterCount();
    });
  }

  // 🔘 Clear All Button Handler
  clearAllBtn.addEventListener("click", () => {
    const chips = chipContainer.querySelectorAll(".chip");
    chips.forEach(chip => chip.remove());
    activeFilters.clear();
    updateFilterCount();
  });

  // 🔢 Update badge count
  function updateFilterCount() {
    const count = activeFilters.size;

    if (count > 0) {
      filterCountBadge.textContent = ` (${count})`;
      filterCountBadge.style.display = "inline";

      // Trigger grow animation
      filterCountBadge.classList.remove("grow"); // reset
      void filterCountBadge.offsetWidth; // force reflow
      filterCountBadge.classList.add("grow");
    } else {
      filterCountBadge.textContent = "";
      filterCountBadge.style.display = "none";
    }
  }
document.querySelectorAll(".scroll-wrapper").forEach(wrapper => {
  const scrollContainer = wrapper.querySelector(".products-card");
  const rightBtn = wrapper.querySelector(".scroll-arrow.scroll-right");
  const leftBtn = wrapper.querySelector(".scroll-arrow.scroll-left");

  const updateButtons = () => {
    const scrollLeft = scrollContainer.scrollLeft;
    const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;

    if (scrollLeft <= 10) {
      leftBtn.style.display = "none";
      rightBtn.style.display = "block";
    } else if (scrollLeft >= maxScrollLeft - 10) {
      rightBtn.style.display = "none";
      leftBtn.style.display = "block";
    } else {
      leftBtn.style.display = "block";
      rightBtn.style.display = "block";
    }
  };

  scrollContainer.addEventListener("scroll", updateButtons);
  updateButtons(); // Run initially

  rightBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: 300, behavior: "smooth" });
  });

  leftBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: -300, behavior: "smooth" });
  });
});
});








// products.js
import categories from './productsData.js';

categories.forEach(category => {
  console.log(category.name);
  category.products.forEach(product => {
    console.log(`Product: ${product.name}`);
  });
});


const container = document.getElementById('dynamicProductCategories');

categories.forEach(({ category, id, products }) => {
  const previewCards = products.slice(0, 6).map(({ name, image }) => {
    return `
      <div class="card">
        <img src="${image}" alt="${name}">
        <p class="product-name">${name}</p>
        <button class="add-to-cart-btn">Add to Cart</button>
      </div>`;
  }).join('');

  const categoryHTML = `
    <div class="product-category">
      <div class="section-header category-name-header">
        <h2>${category.toUpperCase()}</h2>
        <a href="#" class="see-more-btn" data-target="${id}">See More</a>
      </div>
      <div class="scroll-wrapper">
        <button class="scroll-arrow scroll-left" style="display: none;">
          <i class="fas fa-chevron-left"></i>
        </button>
        <div class="products-card">
          ${previewCards}
        </div>
        <button class="scroll-arrow scroll-right">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>`;

  container.insertAdjacentHTML('beforeend', categoryHTML);
});

function adjustProductLayout(wrapper) {
  const scrollContainer = wrapper.querySelector(".products-card");
  const productCards = scrollContainer.querySelectorAll(".card");
  const leftBtn = wrapper.querySelector(".scroll-arrow.scroll-left");
  const rightBtn = wrapper.querySelector(".scroll-arrow.scroll-right");

  const isMobile = window.innerWidth < 768;

  if (!isMobile && productCards.length <= 4) {
    scrollContainer.style.justifyContent = "center";
    scrollContainer.style.overflowX = "hidden";
    leftBtn.style.display = "none";
    rightBtn.style.display = "none";
  } else {
    scrollContainer.style.justifyContent = "flex-start";
    scrollContainer.style.overflowX = "auto";
    leftBtn.style.display = "block";
    rightBtn.style.display = "block";
  }
}




categories.forEach(category => {
  const slidePage = document.createElement("div");
  slidePage.className = "slide-page";
  slidePage.id = category.id;

  const productCards = category.products.map(product => `
    <div class="card">
      <img src="${product.image}" alt="${product.name}">
      <p class="product-name">${product.name}</p>
      <button class="add-to-cart-btn">Add to Cart</button>
    </div>
  `).join('');

  slidePage.innerHTML = `
    <div class="slide-header">
      <button class="back-to-products" title="Back">
        <i class="fas fa-arrow-left"></i>
      </button>
      <h2 class="slide-title">${category.category}</h2>
      <div class="cart-wrapper">
        <a href="cart.html" class="cart-link">
          <i class="fas fa-shopping-cart"></i>
          <span class="cart-count">0</span>
        </a>
      </div>
    </div>
    <div class="products-card">
      ${productCards}
    </div>
  `;

  document.body.appendChild(slidePage);
});


// After rendering all categories
document.querySelectorAll(".scroll-wrapper").forEach(wrapper => {
  adjustProductLayout(wrapper);
});
window.addEventListener("resize", () => {
  document.querySelectorAll(".scroll-wrapper").forEach(wrapper => {
    adjustProductLayout(wrapper);
  });
});


document.addEventListener('click', e => {
  const seeMoreBtn = e.target.closest('.see-more-btn');
  if (seeMoreBtn) {
    e.preventDefault();
    const targetId = seeMoreBtn.dataset.target;
    document.getElementById(targetId).classList.add('active');
  }

  if (e.target.closest('.back-to-products')) {
    e.target.closest('.slide-page').classList.remove('active');
  }
});


