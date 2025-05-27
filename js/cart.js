document.addEventListener("DOMContentLoaded", () => {
    const cartContainer = document.getElementById("cartItems");
    const checkoutBtn = document.getElementById("checkoutBtn");
    const checkoutPanel = document.getElementById("checkoutPanel");
    const closeCheckout = document.getElementById("closeCheckout");
    const checkoutSummary = document.getElementById("checkoutSummary");

    let cart = JSON.parse(localStorage.getItem("cartItems")) || [];

function renderCart() {
    const clearCartBtn = document.getElementById("clearCartBtn");
    cartContainer.innerHTML = "";

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
        checkoutBtn.style.display = "none";

        // ✅ Hide the "Remove All" button when the cart is empty
        if (clearCartBtn) clearCartBtn.style.display = "none";
        updateCartCount();
        return;
    }

    // ✅ Render each cart item
    cart.forEach((item, index) => {
        const card = document.createElement("div");
        card.classList.add("cart-item");
        card.innerHTML = `
            <div class="item-image">
                <img src="${item.image}" alt="${item.name}" />
            </div>
            <div class="item-details">
                <h3>${item.name}</h3>
                <p>${item.description || "No description available"}</p>
                <div class="item-status">IN STOCK</div>
            </div>
            <button class="remove-btn" data-index="${index}">&times;</button>
        `;
        cartContainer.appendChild(card);
    });

    // ✅ Show the "Remove All" and Checkout buttons
    if (clearCartBtn) clearCartBtn.style.display = "inline";
    checkoutBtn.style.display = "block";

    updateCartCount();
}


    function updateCartCount() {
        document.querySelectorAll(".cart-count").forEach(badge => {
            badge.textContent = cart.length;
        });

          // 👇 Update checkout button count
const checkoutCount = document.getElementById("checkoutCount");
  if (checkoutCount) {
    const count = cart.length;
    checkoutCount.textContent = `${count} ${count === 1 ? "item" : "items"}`;
  }
    }

    // Remove item
    cartContainer.addEventListener("click", e => {
        if (e.target.classList.contains("remove-btn")) {
            const index = e.target.dataset.index;
            cart.splice(index, 1);
            localStorage.setItem("cartItems", JSON.stringify(cart));
            renderCart();
            updateCartCount();
        }
    });

    // Open checkout panel
    checkoutBtn.addEventListener("click", () => {
        if (cart.length === 0) return;

        // Render cart summary
checkoutSummary.innerHTML = cart
  .map(item => `
    <li>
      <img src="${item.image}" alt="${item.name}" />
      <span>${item.name}</span>
    </li>
  `)
  .join("");

        checkoutPanel.classList.add("active");
    });

    document.getElementById("clearCartBtn").addEventListener("click", () => {
    if (confirm("Are you sure you want to remove all items from the cart?")) {
        cart = [];
        localStorage.setItem("cartItems", JSON.stringify(cart));
        renderCart();
        updateCartCount();
    }
});


const checkoutForm = document.getElementById("checkoutForm");

checkoutForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form from reloading the page

  // Check if the form is valid
  if (!checkoutForm.checkValidity()) {
    checkoutForm.reportValidity();
    return;
  }

  const name = document.getElementById("userName").value.trim();
  const delivery = document.getElementById("deliveryOption").value.trim();

  const productList = cart
    .map((item, i) => `${i + 1}. ${item.name} — ${item.quantity || 1} bag${item.quantity > 1 ? "s" : ""}`)
    .join("\n");

  const message = `🛒 Hello! I'd like to place an order from your website.\n
👤 Name: ${name}\n🚚 Delivery Preference: ${delivery}\n
Here are the items I’m ordering:
-------------------------------------
${productList}
-------------------------------------

Please provide the total price, payment options, and estimated delivery time.\n
Thank you!`;

  const businessPhone = "2348125844055";
  const url = `https://wa.me/${businessPhone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
  checkoutPanel.classList.remove("active");
});




    // Close panel
    closeCheckout.addEventListener("click", () => {
        checkoutPanel.classList.remove("active");
    });

    renderCart();
});