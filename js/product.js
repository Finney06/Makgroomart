document.addEventListener("DOMContentLoaded", () => {
  const filterToggle = document.getElementById("filterToggle");
  const filterOverlay = document.getElementById("filterOverlay");
  const closeBtn = document.getElementById("closeFilterOverlay");
  const pageOverlay = document.getElementById("pageOverlay");

  // Toggle filter dropdown + animation + dimming
  function toggleFilterDropdown(forceClose = false) {
    const isActive = filterOverlay.classList.contains("active");

    if (isActive || forceClose) {
      filterOverlay.classList.remove("active");
      filterToggle.classList.remove("active");
      pageOverlay.classList.remove("dimmed");
    } else {
      filterOverlay.classList.add("active");
      filterToggle.classList.add("active");
      pageOverlay.classList.add("dimmed");
    }
  }

  filterToggle.addEventListener("click", () => toggleFilterDropdown());
  closeBtn.addEventListener("click", () => toggleFilterDropdown(true));
});
