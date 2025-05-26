document.addEventListener("DOMContentLoaded", () => {
    const cartContainer = document.getElementById("cartItems");
    const checkoutBtn = document.getElementById("checkoutBtn");
    const checkoutPanel = document.getElementById("checkoutPanel");
    const closeCheckout = document.getElementById("closeCheckout");
    const checkoutSummary = document.getElementById("checkoutSummary");

    let cart = JSON.parse(localStorage.getItem("cartItems")) || [];

    function renderCart() {
        cartContainer.innerHTML = "";

        if (cart.length === 0) {
            cartContainer.innerHTML = "<p>Your cart is empty.</p>";
            checkoutBtn.style.display = "none";
            return;
        }

        cart.forEach((item, index) => {
            const card = document.createElement("div");
            card.classList.add("cart-item");
            card.innerHTML = `
        <img src="${item.image}" alt="${item.name}" />
        <p>${item.name}</p>
        <button class="remove-btn" data-index="${index}">&times;</button>
      `;
            cartContainer.appendChild(card);
        });

        updateCartCount();
        checkoutBtn.style.display = "block";
    }

    function updateCartCount() {
        document.querySelectorAll(".cart-count").forEach(badge => {
            badge.textContent = cart.length;
        });
    }

    // Remove item
    cartContainer.addEventListener("click", e => {
        if (e.target.classList.contains("remove-btn")) {
            const index = e.target.dataset.index;
            cart.splice(index, 1);
            localStorage.setItem("cartItems", JSON.stringify(cart));
            renderCart();
        }
    });

    // Open checkout panel
    checkoutBtn.addEventListener("click", () => {
        if (cart.length === 0) return;

        // Render cart summary
        checkoutSummary.innerHTML = cart.map(item => `<li>${item.name}</li>`).join("");
        checkoutPanel.classList.add("active");
    });

    document.querySelector(".whatsapp-btn").addEventListener("click", () => {
        if (cart.length === 0) return;

        const businessPhone = "2348125844055"; // ✅ Replace with your number (Nigeria format)
        const productList = cart.map(item => `- ${item.name}`).join("\n");
        const message = `Hello! I’d like to inquire/order the following products:\n\n${productList}\n\nPlease let me know the price and availability.`;

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