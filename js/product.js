document.addEventListener("DOMContentLoaded", () => {
  const filterToggle = document.getElementById("filterToggle");
  const filterOverlay = document.getElementById("filterOverlay");
  const closeBtn = document.getElementById("closeFilterOverlay");
  const pageOverlay = document.getElementById("pageOverlay");
  const chipContainer = document.getElementById("activeFilters");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const clearAllBtn = document.getElementById("clearAllFilters");
  const filterCountBadge = document.getElementById("filterCountBadge");
  const activeFilters = new Set();

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


  const filterCategories = [
  "Cereals",
  "Legumes",
  "Tubers",
  "Flour",
  "Oil",
  "Spices",
  "Grasses",
  "Feeds",
  "Fertilizers",
  "Chemicals",
  "Animal Farm",
  "Planting Materials",
  "Special Products"
];

const categoryListContainer = document.getElementById("categoryList");

filterCategories.forEach(category => {
  const button = document.createElement("button");
  button.className = "filter-btn";
  button.textContent = category;
  button.setAttribute("data-category", category.toLowerCase().replace(/\s+/g, "-")); // for filtering
  categoryListContainer.appendChild(button);
});

categoryListContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("filter-btn")) {
    const category = e.target.textContent.trim();
    const key = category.toLowerCase();

    // Add chip if not already active
    if (!activeFilters.has(key)) {
      activeFilters.add(key);
      createChip(category, key);
      updateFilterCount();
      filterProductCategories(); // 🔁 Update product view
    }

    // Your filter logic here (if any)
    console.log("Filter by:", category);
  }
});

function filterProductCategories() {
  const allCategorySections = document.querySelectorAll('.product-category');
  if (activeFilters.size === 0) {
    allCategorySections.forEach(section => section.style.display = 'block');
    return;
  }

  allCategorySections.forEach(section => {
    const headerText = section.querySelector('.category-name-header h2')?.textContent.toLowerCase();
    const match = [...activeFilters].some(filter => headerText.includes(filter));
    section.style.display = match ? 'block' : 'none';
  });
}



  // Add filter chip
  function createChip(label, key) {
    const chip = document.createElement("div");
    chip.classList.add("chip");
    chip.dataset.category = key;
    chip.innerHTML = `
      ${label}
      <button class="remove-chip" title="Remove">&times;</button>
    `;
    chipContainer.insertBefore(chip, clearAllBtn);

    chip.querySelector(".remove-chip").addEventListener("click", () => {
      chip.remove();
      activeFilters.delete(key);
      updateFilterCount();
      filterProductCategories(); // 🔁 Update product view

    });
  }

  clearAllBtn.addEventListener("click", () => {
    chipContainer.querySelectorAll(".chip").forEach(chip => chip.remove());
    activeFilters.clear();
    updateFilterCount();
    filterProductCategories(); // 🔁 Update product view

  });

  function updateFilterCount() {
    const count = activeFilters.size;
    if (count > 0) {
      filterCountBadge.textContent = `(${count})`;
      filterCountBadge.style.display = "inline";
      filterCountBadge.classList.remove("grow");
      void filterCountBadge.offsetWidth;
      filterCountBadge.classList.add("grow");
    } else {
      filterCountBadge.textContent = "";
      filterCountBadge.style.display = "none";
    }
  }

  // Horizontal scroll behavior
  document.querySelectorAll(".scroll-wrapper").forEach(wrapper => {
    const scrollContainer = wrapper.querySelector(".products-card");
    const rightBtn = wrapper.querySelector(".scroll-arrow.scroll-right");
    const leftBtn = wrapper.querySelector(".scroll-arrow.scroll-left");

const updateButtons = () => {
  const isMobile = window.innerWidth < 768;
  if (isMobile) {
    leftBtn.style.display = "none";
    rightBtn.style.display = "none";
    return;
  }

  const scrollLeft = scrollContainer.scrollLeft;
  const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
  leftBtn.style.display = scrollLeft <= 10 ? "none" : "block";
  rightBtn.style.display = scrollLeft >= maxScrollLeft - 10 ? "none" : "block";
};


    scrollContainer.addEventListener("scroll", updateButtons);
    updateButtons();

    rightBtn.addEventListener("click", () => {
      scrollContainer.scrollBy({ left: 300, behavior: "smooth" });
    });
    leftBtn.addEventListener("click", () => {
      scrollContainer.scrollBy({ left: -300, behavior: "smooth" });
    });
  });
});

import categories from './productsData.js';

const container = document.getElementById('dynamicProductCategories');

categories.forEach(({ category, id, products }) => {
  const previewCards = products.slice(0, 6).map(({ name, image }) => `
    <div class="card">
      <img src="${image}" alt="${name}">
      <p class="product-name">${name}</p>
      <button class="add-to-cart-btn">Add to Cart</button>
    </div>
  `).join('');

  const categoryHTML = `
    <div class="product-category">
      <div class="section-header category-name-header">
        <h2>${category.toUpperCase()}</h2>
        <a href="#" class="see-more-btn" data-target="${id}">See More</a>
      </div>
      <div class="scroll-wrapper">
        <button class="scroll-arrow scroll-left"><i class="fas fa-chevron-left"></i></button>
        <div class="products-card">${previewCards}</div>
        <button class="scroll-arrow scroll-right"><i class="fas fa-chevron-right"></i></button>
      </div>
    </div>
  `;

  container.insertAdjacentHTML('beforeend', categoryHTML);
  const wrapper = container.lastElementChild.querySelector(".scroll-wrapper");
  adjustProductLayout(wrapper);
});

// Slide Pages
categories.forEach(({ id, category, products }) => {
  const slidePage = document.createElement("div");
  slidePage.className = "slide-page";
  slidePage.id = id;

  const productCards = products.map(({ name, image }) => `
    <div class="card">
      <img src="${image}" alt="${name}">
      <p class="product-name">${name}</p>
      <button class="add-to-cart-btn">Add to Cart</button>
    </div>
  `).join('');

  slidePage.innerHTML = `
    <div class="slide-header">
      <button class="back-to-products" title="Back"><i class="fas fa-arrow-left"></i></button>
      <h2 class="slide-title">${category}</h2>
      <div class="cart-wrapper">
        <a href="cart.html" class="cart-link">
          <i class="fas fa-shopping-cart"></i>
          <span class="cart-count">0</span>
        </a>
      </div>
    </div>
    <div class="scroll-wrapper">
      <button class="scroll-arrow scroll-left"><i class="fas fa-chevron-left"></i></button>
      <div class="products-card">${productCards}</div>
      <button class="scroll-arrow scroll-right"><i class="fas fa-chevron-right"></i></button>
    </div>
  `;

  document.body.appendChild(slidePage);
  const wrapper = slidePage.querySelector('.scroll-wrapper');
  adjustProductLayout(wrapper);
});

function adjustProductLayout(wrapper) {
  const scrollContainer = wrapper.querySelector(".products-card");
  const productCards = scrollContainer.querySelectorAll(".card");
  const leftBtn = wrapper.querySelector(".scroll-arrow.scroll-left");
  const rightBtn = wrapper.querySelector(".scroll-arrow.scroll-right");
  const isMobile = window.innerWidth < 768;

if (isMobile) {
  scrollContainer.classList.remove("no-scroll"); // Allow swipe scroll
  leftBtn.style.display = "none";
  rightBtn.style.display = "none";
} else if (productCards.length <= 4) {
  scrollContainer.classList.add("no-scroll"); // Optional: disable arrows & scroll if few items
  leftBtn.style.display = "none";
  rightBtn.style.display = "none";
} else {
  scrollContainer.classList.remove("no-scroll");
  leftBtn.style.display = "block";
  rightBtn.style.display = "block";
}
}

// Slide navigation
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

window.addEventListener("resize", () => {
  document.querySelectorAll(".scroll-wrapper").forEach(wrapper => {
    adjustProductLayout(wrapper);
  });
});
