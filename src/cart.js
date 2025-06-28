document.addEventListener("DOMContentLoaded", () => {
    const orderCountEl = document.getElementById("order-count");
    const totalAmountEl = document.getElementById("total-amount");
    const clearBtn = document.getElementById("clear-cart");

    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const itemPrice = 400;
    const orderCount = cartItems.length;
    const totalAmount = orderCount * itemPrice;

    orderCountEl.textContent = orderCount;
    totalAmountEl.textContent = totalAmount;

    clearBtn.addEventListener("click", () => {
        localStorage.removeItem("cartItems");
        orderCountEl.textContent = "0";
        totalAmountEl.textContent = "0";
        alert("Cart has been cleared.");
    });
});
