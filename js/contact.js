// FIXED AND REFACTORED CODE
import categories from './productsData.js';

document.addEventListener("DOMContentLoaded", () => {
  const filterToggle = document.getElementById("filterToggle");
  const filterOverlay = document.getElementById("filterOverlay");
  const closeBtn = document.getElementById("closeFilterOverlay");
  const pageOverlay = document.getElementById("pageOverlay");
  const chipContainer = document.getElementById("activeFilters");
  const clearAllBtn = document.getElementById("clearAllFilters");
  const filterCountBadge = document.getElementById("filterCountBadge");
  const previewContainer = document.getElementById("dynamicProductCategories");
  const categoryListContainer = document.getElementById("categoryList");
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

  // Inject filter buttons dynamically
  categories.forEach(({ category }) => {
    const button = document.createElement("button");
    button.className = "filter-btn";
    button.textContent = category;
    button.setAttribute("data-category", category.toLowerCase());
    categoryListContainer.appendChild(button);
  });

  // Listen to filter button click
  categoryListContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("filter-btn")) {
      const category = e.target.textContent.trim();
      const key = category.toLowerCase();
      if (!activeFilters.has(key)) {
        activeFilters.add(key);
        createChip(category, key);
        updateFilterCount();
        renderFilteredCategories();
      }
    }
  });

  // Create chip
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
      renderFilteredCategories();
    });
  }

  // Clear all filters
  clearAllBtn.addEventListener("click", () => {
    chipContainer.querySelectorAll(".chip").forEach(chip => chip.remove());
    activeFilters.clear();
    updateFilterCount();
    renderFilteredCategories();
  });

  // Update filter badge
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

  // Render filtered category previews
  function renderFilteredCategories() {
    previewContainer.innerHTML = "";

    activeFilters.forEach(key => {
      const matchedCategory = categories.find(cat => cat.category.toLowerCase() === key);
      if (!matchedCategory) return;

      const previewCards = matchedCategory.products.slice(0, 6).map(({ name, image }) => `
        <div class="card">
          <img src="${image}" alt="${name}">
          <p class="product-name">${name}</p>
          <button class="add-to-cart-btn">Add to Cart</button>
        </div>
      `).join('');

      const section = document.createElement("div");
      section.classList.add("product-category");
      section.innerHTML = `
        <div class="section-header category-name-header">
          <h2>${matchedCategory.category.toUpperCase()}</h2>
          <a href="#" class="see-more-btn" data-target="${matchedCategory.id}">See More</a>
        </div>
        <div class="scroll-wrapper">
          <button class="scroll-arrow scroll-left"><i class="fas fa-chevron-left"></i></button>
          <div class="products-card">${previewCards}</div>
          <button class="scroll-arrow scroll-right"><i class="fas fa-chevron-right"></i></button>
        </div>
      `;

      previewContainer.appendChild(section);
      const wrapper = section.querySelector(".scroll-wrapper");
      adjustProductLayout(wrapper);
    });
  }

  // Reuse layout adjustment
  function adjustProductLayout(wrapper) {
    const scrollContainer = wrapper.querySelector(".products-card");
    const productCards = scrollContainer.querySelectorAll(".card");
    const leftBtn = wrapper.querySelector(".scroll-arrow.scroll-left");
    const rightBtn = wrapper.querySelector(".scroll-arrow.scroll-right");
    const isMobile = window.innerWidth < 768;

    if (isMobile || productCards.length <= 4) {
      leftBtn.style.display = "none";
      rightBtn.style.display = "none";
    } else {
      leftBtn.style.display = "block";
      rightBtn.style.display = "block";
    }

    scrollContainer.addEventListener("scroll", () => {
      const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
      leftBtn.style.display = scrollContainer.scrollLeft <= 10 ? "none" : "block";
      rightBtn.style.display = scrollContainer.scrollLeft >= maxScrollLeft - 10 ? "none" : "block";
    });

    leftBtn.addEventListener("click", () => {
      scrollContainer.scrollBy({ left: -300, behavior: "smooth" });
    });
    rightBtn.addEventListener("click", () => {
      scrollContainer.scrollBy({ left: 300, behavior: "smooth" });
    });
  }

  window.addEventListener("resize", () => {
    document.querySelectorAll(".scroll-wrapper").forEach(wrapper => adjustProductLayout(wrapper));
  });

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
});
