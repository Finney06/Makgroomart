import categories from './productsData.js';

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById('dynamicProductCategories');
  const filterToggle = document.getElementById("filterToggle");
  const filterOverlay = document.getElementById("filterOverlay");
  const closeBtn = document.getElementById("closeFilterOverlay");
  const pageOverlay = document.getElementById("pageOverlay");
  const chipContainer = document.getElementById("activeFilters");
  const clearAllBtn = document.getElementById("clearAllFilters");
  const filterCountBadge = document.getElementById("filterCountBadge");
  const searchInput = document.getElementById('productSearch');
  const noResultsMessage = document.getElementById('noResultsMessage');
  const categoryListContainer = document.getElementById("categoryList");
  const activeFilters = new Set();

  // Toggle filter overlay
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

  // Add filter category buttons
  const filterCategories = [
    "Cereals", "Legumes", "Tubers", "Flour", "Oil", "Spices",
    "Grasses", "Feeds", "Fertilizers", "Chemicals",
    "Animal Farm", "Planting Materials", "Special Products"
  ];

  filterCategories.forEach(category => {
    const button = document.createElement("button");
    button.className = "filter-btn";
    button.textContent = category;
    button.setAttribute("data-category", category.toLowerCase().replace(/\s+/g, "-"));
    categoryListContainer.appendChild(button);
  });

  categoryListContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("filter-btn")) {
      const category = e.target.textContent.trim();
      const key = category.toLowerCase();
      if (!activeFilters.has(key)) {
        activeFilters.add(key);
        createChip(category, key);
        updateFilterCount();
        filterProductCategories();
      }
    }
  });

  // Create and manage filter chips
  function createChip(label, key) {
    const chip = document.createElement("div");
    chip.classList.add("chip");
    chip.dataset.category = key;
    chip.innerHTML = `${label} <button class="remove-chip" title="Remove">&times;</button>`;
    chipContainer.insertBefore(chip, clearAllBtn);

    chip.querySelector(".remove-chip").addEventListener("click", () => {
      chip.remove();
      activeFilters.delete(key);
      updateFilterCount();
      filterProductCategories();
    });
  }

  clearAllBtn.addEventListener("click", () => {
    chipContainer.querySelectorAll(".chip").forEach(chip => chip.remove());
    activeFilters.clear();
    updateFilterCount();
    filterProductCategories();
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

  // Filtering logic
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

  // Render preview product categories
  function renderCategories() {
    container.innerHTML = '';

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
      initScrollBehavior(wrapper);
    });
  }

  // Render full slide pages
  function renderSlidePages() {
    document.querySelectorAll(".slide-page").forEach(p => p.remove());

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
      initScrollBehavior(wrapper);
    });
  }

  // Product layout and scroll logic
  function adjustProductLayout(wrapper) {
    const scrollContainer = wrapper.querySelector(".products-card");
    const productCards = scrollContainer.querySelectorAll(".card");
    const leftBtn = wrapper.querySelector(".scroll-arrow.scroll-left");
    const rightBtn = wrapper.querySelector(".scroll-arrow.scroll-right");
    const isMobile = window.innerWidth < 768;

    if (isMobile || productCards.length <= 4) {
      scrollContainer.classList.remove("no-scroll");
      leftBtn.style.display = "none";
      rightBtn.style.display = "none";
    } else {
      scrollContainer.classList.remove("no-scroll");
      leftBtn.style.display = "block";
      rightBtn.style.display = "block";
    }
  }

  function initScrollBehavior(wrapper) {
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
    rightBtn.addEventListener("click", () => scrollContainer.scrollBy({ left: 300, behavior: "smooth" }));
    leftBtn.addEventListener("click", () => scrollContainer.scrollBy({ left: -300, behavior: "smooth" }));
    updateButtons();
  }

  // Search products
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase().trim();
    container.innerHTML = '';
    let anyMatch = false;

    categories.forEach(({ category, id, products }) => {
      const matches = products.filter(p => p.name.toLowerCase().includes(query));
      if (matches.length > 0) {
        anyMatch = true;
        const cardsHTML = matches.map(({ name, image }) => `
          <div class="card">
            <img src="${image}" alt="${name}">
            <p class="product-name">${name}</p>
            <button class="add-to-cart-btn">Add to Cart</button>
          </div>
        `).join('');

        const html = `
          <div class="product-category">
            <div class="section-header category-name-header">
              <h2>${category.toUpperCase()}</h2>
            </div>
            <div class="scroll-wrapper">
              <div class="products-card">${cardsHTML}</div>
            </div>
          </div>
        `;

        container.insertAdjacentHTML('beforeend', html);
      }
    });

    noResultsMessage.style.display = !anyMatch && query !== "" ? 'block' : 'none';

    if (query === "") {
      renderCategories();
      renderSlidePages();
      filterProductCategories();
      noResultsMessage.style.display = 'none';
    }
  });

  // See more / back buttons
  document.addEventListener('click', e => {
    const seeMoreBtn = e.target.closest('.see-more-btn');
    if (seeMoreBtn) {
      e.preventDefault();
      const targetId = seeMoreBtn.dataset.target;
      document.getElementById(targetId)?.classList.add('active');
    }

    if (e.target.closest('.back-to-products')) {
      e.target.closest('.slide-page')?.classList.remove('active');
    }
  });

  // Initial rendering
  renderCategories();
  renderSlidePages();

  // Resize handler
  window.addEventListener("resize", () => {
    document.querySelectorAll(".scroll-wrapper").forEach(wrapper => {
      adjustProductLayout(wrapper);
    });
  });
});
