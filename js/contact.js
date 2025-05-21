document.addEventListener("DOMContentLoaded", () => {
  const chipContainer = document.getElementById("activeFilters");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const clearAllBtn = document.getElementById("clearAllFilters");

  const activeFilters = new Set();

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const category = btn.textContent.trim();
      const key = category.toLowerCase();

      if (!activeFilters.has(key)) {
        activeFilters.add(key);
        createChip(category, key);
      }
    });
  });

  function createChip(label, key) {
    const chip = document.createElement("div");
    chip.classList.add("chip");
    chip.dataset.category = key;
    chip.innerHTML = `
      ${label}
      <button class="remove-chip">&times;</button>
    `;
    chipContainer.insertBefore(chip, clearAllBtn); // insert before "Clear All"

    chip.querySelector(".remove-chip").addEventListener("click", () => {
      chip.remove();
      activeFilters.delete(key);
    });
  }

  // 🔘 Clear All Button Handler
  clearAllBtn.addEventListener("click", () => {
    const chips = chipContainer.querySelectorAll(".chip");
    chips.forEach(chip => chip.remove());
    activeFilters.clear();
  });
});
