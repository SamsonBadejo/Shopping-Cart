var items = [
    { name: "Nike Shoes", price: 100, quantity: 1, liked: false },
    // Add details of other items here
];

function updateCart() {
    var totalPrice = 0;
    var cartItemsDiv = document.getElementById('cartItems');
    cartItemsDiv.innerHTML = ''; // Clear previous items

    items.forEach((item, index) => {
        var quantityElement = document.getElementById(`quantity_${index}`);
        quantityElement.textContent = item.quantity;

        var likeButton = document.querySelector(`.like-button:nth-of-type(${index + 1}) .heart`);
        likeButton.style.color = item.liked ? 'red' : '#ccc';

        totalPrice += item.price * item.quantity;

        // Create and append cart item
        var cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <span>${item.name} - Quantity: ${item.quantity}</span>
            <span>$${item.price * item.quantity}</span>
        `;
        cartItemsDiv.appendChild(cartItem);
    });

    document.getElementById('totalPrice').textContent = `$${totalPrice}`;
    document.getElementById('cartTotal').textContent = `$${totalPrice}`;
}

function increaseQuantity(index) {
    items[index].quantity++;
    updateCart();
}

function decreaseQuantity(index) {
    if (items[index].quantity > 1) {
        items[index].quantity--;
        updateCart();
    }
}

function toggleLike(index) {
    items[index].liked = !items[index].liked;
    updateCart();
}

function addToCart() {
    // Here you can add logic to add items to the cart
    alert("Items added to cart! 🛒");
    // For demonstration, let's just update the cart here
    updateCart();
}

function clearCart() {
    // Here you can add logic to clear the cart
    alert("Cart cleared! 🛒");
    items = []; // Empty the items array
    updateCart(); // Update the cart UI
}

// Initial cart update
updateCart();
