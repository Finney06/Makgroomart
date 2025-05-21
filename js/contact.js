document.addEventListener("DOMContentLoaded", () => {
  const filterToggle = document.getElementById("filterToggle");
  const filterOverlay = document.getElementById("filterOverlay");
  const closeBtn = document.getElementById("closeFilterOverlay");
  const pageOverlay = document.getElementById("pageOverlay");
  const chipContainer = document.getElementById("activeFilters");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const clearAllBtn = document.getElementById("clearAllFilters");
  const filterCountBadge = document.getElementById("filterCountBadge"); // 👈 new badge element

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
        updateFilterCount(); // 👈 update count on add
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
      updateFilterCount(); // 👈 update count on remove
    });
  }

  // 🔘 Clear All Button Handler
  clearAllBtn.addEventListener("click", () => {
    const chips = chipContainer.querySelectorAll(".chip");
    chips.forEach(chip => chip.remove());
    activeFilters.clear();
    updateFilterCount(); // 👈 update count on clear
  });

  // 🔢 Update badge count
  function updateFilterCount() {
    const count = activeFilters.size;

    if (count > 0) {
      filterCountBadge.textContent = count;
      filterCountBadge.classList.add("show");
    } else {
      filterCountBadge.classList.remove("show");
    }
  }
});
