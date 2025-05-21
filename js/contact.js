document.addEventListener("DOMContentLoaded", () => {
  const seeMoreBtns = document.querySelectorAll(".see-more-btn");
  const closeBtns = document.querySelectorAll(".close-slide");

  seeMoreBtns.forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      const targetId = btn.dataset.target;
      document.getElementById(targetId)?.classList.add("active");
    });
  });

  closeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.closest(".slide-page").classList.remove("active");
    });
  });
});
