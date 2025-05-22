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

  seeMoreBtns.forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      const targetId = btn.dataset.target;
      document.getElementById(targetId) ?.classList.add("active");
    });
  });

  backBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.closest(".slide-page").classList.remove("active");
    });
  });
});