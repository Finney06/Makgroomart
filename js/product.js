document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("productSearch");
  const filterToggle = document.getElementById("filterToggle");
  const filterOverlay = document.getElementById("filterOverlay");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const chipContainer = document.getElementById("activeFilters");

  const activeFilters = new Set();

  // Toggle animated filter dropdown
  filterToggle.addEventListener("click", () => {
    filterOverlay.classList.toggle("active");
  });

  // Handle category filters
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const category = btn.dataset.category.toLowerCase();

      if (!activeFilters.has(category)) {
        activeFilters.add(category);
        createChip(category);
        applyFilters();
      }

      filterOverlay.classList.remove("active");
    });
  });

  // Create chip
  function createChip(category) {
    const chip = document.createElement("div");
    chip.classList.add("chip");
    chip.dataset.category = category;
    chip.innerHTML = `${capitalize(category)} <button class="remove-chip">&times;</button>`;
    chipContainer.appendChild(chip);

    chip.querySelector(".remove-chip").addEventListener("click", () => {
      activeFilters.delete(category);
      chip.remove();
      applyFilters();
    });
  }

  // Apply filters to swiper slides
  function applyFilters() {
    const slides = document.querySelectorAll(".swiper-slide");
    const searchTerm = searchInput.value.toLowerCase();

    slides.forEach(slide => {
      const text = slide.innerText.toLowerCase();
      const matchesSearch = text.includes(searchTerm);
      const matchesCategory = activeFilters.size === 0 || [...activeFilters].some(cat => text.includes(cat));
      slide.style.display = matchesSearch && matchesCategory ? "flex" : "none";
    });
  }

  // Handle search input
  searchInput.addEventListener("input", () => {
    applyFilters();
  });

  // Capitalize chip text
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
});
