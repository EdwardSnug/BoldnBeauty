//we start by injecting our data to our cards with their respective fields
//Fields include: ImageUrl,description and an add to cart button
const flowerPrice = 1000; //Bouquet price in Ksh 
//Storing each Item click into an array of our choice with its attributes
//Using LocalStorage to keep a record as long as the session is active
let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
const apiEndpoint = "http://localhost:3000/flowers"

document.addEventListener("DOMContentLoaded", () => {
    fetch(apiEndpoint)
        .then((res) => res.json())
        .then((data) => {
            //Fetch section where to input our data
            const section = document.querySelector("#product-list");
            //Lets put it into our card calss to help in styling
            const productList = document.querySelector("#mycard")
            //console.log(productList);
            //Our cartCount is used to show number of Orders placed
            const cartCount = document.getElementById("cart-count");

            // Initialize count in UI
            cartCount.textContent = cartItems.length;

            data.forEach((product) => {
                const card = document.createElement("div");
                //Add some Bootstrap styling to help in the view
                card.className = "card h-100";
                card.style.width = "18rem";

                card.innerHTML = `
          <img src="${product.image}" class="card-img-top" alt="Flowermania">
          <div class="card-body">
          <p class="card-text">Kes: ${product.price}</p>
            <p class="card-text">${product.description}</p>
            <button class="btn btn-outline-success add-to-cart-btn" data-id="${product.id}">Put into Cart</button>
          </div>
        `;

                productList.appendChild(card);
                section.appendChild(productList);
                
            });

            productList.addEventListener("click", function (e) {
                if (e.target.classList.contains("add-to-cart-btn")) {
                    const productId = parseInt(e.target.getAttribute("data-id"));
                    const selectedProduct = data.find(p => p.id === productId);

                    // Add price to item (optional, could be in db.json instead)
                    const itemToCart = {
                        ...selectedProduct,
                        price: flowerPrice
                    };

                    cartItems.push(itemToCart);

                    // Save to localStorage
                    localStorage.setItem("cartItems", JSON.stringify(cartItems));

                    // Update cart counter
                    cartCount.textContent = cartItems.length;

                    alert(`Added to cart. Total items: ${cartItems.length}`);
                }
            });
        })
        .catch((error) => {
            console.error("Failed to fetch products:", error);
        });
});
