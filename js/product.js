import categories from './productsData.js';

document.addEventListener("DOMContentLoaded", () => {
  // Main container for product categories
  const container = document.getElementById('dynamicProductCategories');

  // Elements for filter functionality
  const filterToggle = document.getElementById("filterToggle");
  const filterOverlay = document.getElementById("filterOverlay");
  const closeBtn = document.getElementById("closeFilterOverlay");
  const pageOverlay = document.getElementById("pageOverlay");
  const chipContainer = document.getElementById("activeFilters");
  const clearAllBtn = document.getElementById("clearAllFilters");
  const filterCountBadge = document.getElementById("filterCountBadge");

  // Element for search functionality
  const searchInput = document.getElementById('productSearch');

  // Element for filter button list
  const categoryListContainer = document.getElementById("categoryList");

  // Set for active filters
  const activeFilters = new Set();

  let cart = JSON.parse(localStorage.getItem("cartItems")) || [];


  // --- FILTER DROPDOWN ---
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

  // --- FILTER BUTTONS CREATION ---
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

  // --- FILTER BUTTONS EVENT ---
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

  // --- Filter Chip Creation ---
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

  // --- FILTERING PRODUCT CATEGORIES ---
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

  // --- PRODUCT CATEGORY RENDERING ---
  function renderCategories() {
    container.innerHTML = '';
    categories.forEach(({ category, id, products }) => {
      const previewCards = products.slice(0, 6).map(({ name, image, quantityTypes }) => `
<div class="card">
    <img src="${image}" alt="${name}">
    <p class="product-name">${name}</p>

    <div class="qty-wrapper hidden">
      <div class="product-options">
        <div class="unit-selector">
          <label>Unit</label>
          <select class="quantity-type">
            ${(quantityTypes || ["Unit"]).map(type => `<option value="${type}">${type}</option>`).join('')}
          </select>
        </div>

        <div class="quantity-selector">
          <label>Qty</label>
          <div class="qty-controls">
            <button class="qty-btn minus" type="button">−</button>
            <input type="number" class="quantity-input" value="1" min="1" />
            <button class="qty-btn plus" type="button">+</button>
          </div>
        </div>
      </div>
    </div>

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

  // --- SLIDE PAGES RENDERING ---
  function renderSlidePages() {
    categories.forEach(({ id, category, products }) => {
      const slidePage = document.createElement("div");
      slidePage.className = "slide-page";
      slidePage.id = id;

      const productCards = products.slice(0, 6).map(({ name, image, quantityTypes }) => `
<div class="card">
    <img src="${image}" alt="${name}">
    <p class="product-name">${name}</p>

    <div class="qty-wrapper hidden">
      <div class="product-options">
        <div class="unit-selector">
          <label>Unit</label>
          <select class="quantity-type">
            ${(quantityTypes || ["Unit"]).map(type => `<option value="${type}">${type}</option>`).join('')}
          </select>
        </div>

        <div class="quantity-selector">
          <label>Qty</label>
          <div class="qty-controls">
            <button class="qty-btn minus" type="button">−</button>
            <input type="number" class="quantity-input" value="1" min="1" />
            <button class="qty-btn plus" type="button">+</button>
          </div>
        </div>
      </div>
    </div>

    <button class="add-to-cart-btn">Add to Cart</button>
  </div>

`).join('');

      slidePage.innerHTML = `
        <div class="slide-header">
         <a href=""><button class="back-to-products" title="Back"><i class="fas fa-arrow-left"></i></button></a> 
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
      const wrapper = slidePage.querySelector(".scroll-wrapper");
      adjustProductLayout(wrapper);
      initScrollBehavior(wrapper);
    });
  }

  function updateCartItemInStorage(name, qty, unit) {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const index = cartItems.findIndex(item => item.name === name);
  if (index > -1) {
    cartItems[index].quantityValue = qty;
    cartItems[index].quantityType = unit;
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }
}

function attachCartListeners() {
  const buttons = document.querySelectorAll('.add-to-cart-btn');

  buttons.forEach(btn => {
    const card = btn.closest('.card');
    const name = card.querySelector('.product-name')?.textContent;

    // Find product details
    let foundProduct = null;
    for (const category of categories) {
      foundProduct = category.products.find(p => p.name === name);
      if (foundProduct) break;
    }
    if (!foundProduct) return;

    const { image, description } = foundProduct;
    const qtyWrapper = card.querySelector(".qty-wrapper");
    const qtyInput = card.querySelector(".quantity-input");
    const unitSelect = card.querySelector(".quantity-type");
    const minusBtn = card.querySelector(".qty-btn.minus");
    const plusBtn = card.querySelector(".qty-btn.plus");

    // Load existing cart
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const inCart = cartItems.some(item => item.name === name);

    // Update UI based on cart state
    if (inCart) {
      btn.textContent = "Remove from Cart";
      btn.classList.add("in-cart");
      qtyWrapper.classList.remove("hidden");

      const storedItem = cartItems.find(item => item.name === name);
      if (storedItem) {
        if (qtyInput) qtyInput.value = storedItem.quantityValue || 1;
        if (unitSelect) unitSelect.value = storedItem.quantityType || unitSelect.value;
      }
    } else {
      btn.textContent = "Add to Cart";
      btn.classList.remove("in-cart");
      qtyWrapper.classList.add("hidden");
    }

    // Stepper (+/−) button behavior
    if (minusBtn && plusBtn && qtyInput) {
      minusBtn.addEventListener('click', () => {
        const current = parseInt(qtyInput.value || "1");
        if (current > 1) {
          qtyInput.value = current - 1;
          qtyInput.dispatchEvent(new Event('input'));
        }
      });

      plusBtn.addEventListener('click', () => {
        qtyInput.value = parseInt(qtyInput.value || "1") + 1;
        qtyInput.dispatchEvent(new Event('input'));
      });
    }

    // Add/Remove Cart
    btn.addEventListener('click', () => {
      cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      const index = cartItems.findIndex(item => item.name === name);

if (btn.classList.contains("in-cart")) {
  cartItems.splice(index, 1);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));

  // Reset input values
  if (qtyInput) qtyInput.value = 1;
  if (unitSelect) unitSelect.selectedIndex = 0;

  btn.textContent = "Add to Cart";
  btn.classList.remove("in-cart");
  qtyWrapper.classList.add("hidden");
  updateCartCount();
  return;
}


      qtyWrapper.classList.remove("hidden");
      const quantityType = unitSelect?.value || "Unit";
      const quantityValue = parseInt(qtyInput?.value || "1", 10);
      const slug = name.toLowerCase().replace(/\s+/g, '-');

      if (index > -1) {
        cartItems[index].quantityType = quantityType;
        cartItems[index].quantityValue = quantityValue;
        cartItems[index].slug = slug; 
      } else {
        cartItems.push({
          name,
          image,
          slug,
          description: description || "No description available",
          quantityType,
          quantityValue
        });
      }

      btn.textContent = "Remove from Cart";
      btn.classList.add("in-cart");
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      updateCartCount();
    });

// Listen to quantity changes
qtyInput?.addEventListener("input", () => {
  if (btn.classList.contains("in-cart")) {
    const newQty = parseInt(qtyInput.value || "1", 10);
    const newUnit = unitSelect?.value || "Unit";
    updateCartItemInStorage(name, newQty, newUnit);
  }
});

// Listen to unit changes
unitSelect?.addEventListener("change", () => {
  if (btn.classList.contains("in-cart")) {
    const newQty = parseInt(qtyInput.value || "1", 10);
    const newUnit = unitSelect?.value || "Unit";
    updateCartItemInStorage(name, newQty, newUnit);
  }
});

  });
}

  // --- LAYOUT ADJUSTMENT FUNCTION ---
  function adjustProductLayout(wrapper) {
    const scrollContainer = wrapper.querySelector(".products-card");
    const productCards = scrollContainer.querySelectorAll(".card");
    const leftBtn = wrapper.querySelector(".scroll-arrow.scroll-left");
    const rightBtn = wrapper.querySelector(".scroll-arrow.scroll-right");
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      scrollContainer.classList.remove("no-scroll");
      leftBtn.style.display = "none";
      rightBtn.style.display = "none";
    } else if (productCards.length <= 4) {
      scrollContainer.classList.add("no-scroll");
      leftBtn.style.display = "none";
      rightBtn.style.display = "none";
    } else {
      scrollContainer.classList.remove("no-scroll");
      leftBtn.style.display = "block";
      rightBtn.style.display = "block";
    }
  }

  // --- HORIZONTAL SCROLL BEHAVIOR ---
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
    updateButtons();

    rightBtn.addEventListener("click", () => {
      scrollContainer.scrollBy({ left: 300, behavior: "smooth" });
    });
    leftBtn.addEventListener("click", () => {
      scrollContainer.scrollBy({ left: -300, behavior: "smooth" });
    });
  }

  // --- SEARCH FUNCTIONALITY ---
  const noResultsMessage = document.getElementById('noResultsMessage');
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase().trim();
    container.innerHTML = '';
    let anyMatch = false;

    categories.forEach(({ category, products }) => {
      const matchingProducts = products.filter(product =>
        product.name.toLowerCase().includes(query)
      );

      if (matchingProducts.length > 0) {
        anyMatch = true;
      const productCards = matchingProducts.map(({ name, image, quantityTypes }) => `
 <div class="card">
    <img src="${image}" alt="${name}">
    <p class="product-name">${name}</p>

    <div class="qty-wrapper hidden">
      <div class="product-options">
        <div class="unit-selector">
          <label>Unit</label>
          <select class="quantity-type">
            ${(quantityTypes || ["Unit"]).map(type => `<option value="${type}">${type}</option>`).join('')}
          </select>
        </div>

        <div class="quantity-selector">
          <label>Qty</label>
          <div class="qty-controls">
            <button class="qty-btn minus" type="button">−</button>
            <input type="number" class="quantity-input" value="1" min="1" />
            <button class="qty-btn plus" type="button">+</button>
          </div>
        </div>
      </div>
    </div>

    <button class="add-to-cart-btn">Add to Cart</button>
  </div>

`).join('');
        const categoryHTML = `
        <div class="product-category">
          <div class="section-header category-name-header">
            <h2>${category.toUpperCase()}</h2>
          </div>
          <div class="scroll-wrapper">
            <div class="products-card">${productCards}</div>
          </div>
        </div>
      `;

        container.insertAdjacentHTML('beforeend', categoryHTML);
      }
    });
 attachCartListeners();
    noResultsMessage.style.display = anyMatch ? 'none' : 'block';

    if (!query) {
      renderCategories();
      renderSlidePages();
      filterProductCategories();
      attachCartListeners();
      noResultsMessage.style.display = 'none';
    }

  });

// --- SLIDE PAGE NAVIGATION ---
document.addEventListener('click', e => {
    const seeMoreBtn = e.target.closest('.see-more-btn');
    if (seeMoreBtn) {
        e.preventDefault();
        const targetId = seeMoreBtn.dataset.target;
        document.getElementById(targetId)?.classList.add('active');
        document.body.classList.add('no-scroll');  // 👉 Add this line
    }

    if (e.target.closest('.back-to-products')) {
        e.target.closest('.slide-page')?.classList.remove('active');
        document.body.classList.remove('no-scroll');  // 👉 Add this line
    }
});


  // --- INITIAL RENDERS ---
  renderCategories();
  renderSlidePages();
  attachCartListeners();
  updateCartCount(); // 💡 Ensure it's triggered on page load

  // --- RESIZE HANDLER ---
  window.addEventListener("resize", () => {
    document.querySelectorAll(".scroll-wrapper").forEach(wrapper => adjustProductLayout(wrapper));
  });

  function scrollToProductFromHash() {
  const hash = window.location.hash;
  if (!hash) return;

  const targetSlug = hash.slice(1).toLowerCase();
  const cards = document.querySelectorAll(".card");

  for (const card of cards) {
    const name = card.querySelector(".product-name")?.textContent.toLowerCase();
    const slug = name.replace(/\s+/g, '-');
    if (slug === targetSlug) {
      card.scrollIntoView({ behavior: "smooth", block: "center" });
      card.classList.add("highlight"); // Optional visual indicator
      setTimeout(() => card.classList.remove("highlight"), 2000);
      break;
    }
  }
}

scrollToProductFromHash(); // 👈 Call this at the end of DOMContentLoaded

});
