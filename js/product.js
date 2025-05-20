document.addEventListener("DOMContentLoaded", () => {
  const filterToggle = document.getElementById("filterToggle");
  const filterOverlay = document.getElementById("filterOverlay");
  const closeBtn = document.getElementById("closeFilterOverlay");

  // Toggle dropdown on filter button click
  filterToggle.addEventListener("click", () => {
    filterOverlay.classList.toggle("active");
  });

  closeBtn.addEventListener("click", () => {
    filterOverlay.classList.remove("active");
  });
});
