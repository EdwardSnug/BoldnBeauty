document.addEventListener("DOMContentLoaded", () => {
    const orderCountElement = document.getElementById("order-count");
    const totalAmountcalc = document.getElementById("total-amount");
    const clearBtn = document.getElementById("clear-cart");

    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const orderCount = cartItems.length;
    //Calculate the total for our orders
    // let totalAmount = cartItems.reduce(function(sum, item){
    //     return sum + item.price
    // }, 0);
    //Same as above but simplified with an arrow function
    const totalAmount = cartItems.reduce((sum, item) => sum + Number(item.price), 0);

    orderCountElement.textContent = orderCount;
    totalAmountcalc.textContent = `Kes: ${totalAmount}`;;
    //Clears the number of orders placed
    clearBtn.addEventListener("click", () => {
        localStorage.removeItem("cartItems");
        orderCountElement.textContent = "0";
        totalAmountcalc.textContent = "0";
        alert("Cart has been cleared.");
    });
});
