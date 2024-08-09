// Sample product data
const products = [
    { id: 1, name: "Hat brown", price: 10.00, description: "Royal hat", imageUrl: "https://images.pexels.com/photos/35185/hats-fedora-hat-manufacture-stack.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 2, name: "Hat elegant", price: 20.00, description: "Elgant hat", imageUrl: "https://images.pexels.com/photos/984619/pexels-photo-984619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 3, name: "Cap", price: 30.00, description: "Yo cap", imageUrl: "https://images.pexels.com/photos/1878821/pexels-photo-1878821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }
];

const cart = [];

// Function to display products
function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'bg-white p-4 rounded-lg shadow-lg';
        productCard.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}" class="w-full h-48 object-cover mb-4">
            <h3 class="text-xl font-bold mb-2">${product.name}</h3>
            <p class="text-gray-700 mb-2">${product.description}</p>
            <p class="text-gray-900 font-bold mb-4">$${product.price.toFixed(2)}</p>
            <button class="add-to-cart bg-green-500 text-white p-2 rounded" data-id="${product.id}">Add to Cart</button>
        `;
        productList.appendChild(productCard);
    });
}

// Function to display cart items
function displayCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'flex justify-between items-center mb-4';
        cartItem.innerHTML = `
            <div>
                <h4 class="text-lg font-bold">${item.name}</h4>
                <p class="text-gray-700">Quantity: ${item.quantity}</p>
                <p class="text-gray-900 font-bold">$${(item.price * item.quantity).toFixed(2)}</p>
            </div>
            <div>
                <button class="increase-quantity bg-blue-500 text-white p-2 rounded mr-2" data-id="${item.id}">+</button>
                <button class="decrease-quantity bg-yellow-500 text-white p-2 rounded mr-2" data-id="${item.id}">-</button>
                <button class="remove-from-cart bg-red-500 text-white p-2 rounded" data-id="${item.id}">Remove</button>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });
}

// Function to add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    displayCart();
}

// Function to increase quantity
function increaseQuantity(productId) {
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity += 1;
        displayCart();
    }
}

// Function to decrease quantity
function decreaseQuantity(productId) {
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem && cartItem.quantity > 1) {
        cartItem.quantity -= 1;
        displayCart();
    }
}

// Function to remove product from cart
function removeFromCart(productId) {
    const cartIndex = cart.findIndex(item => item.id === productId);
    if (cartIndex > -1) {
        cart.splice(cartIndex, 1);
        displayCart();
    }
}

// Function to handle checkout
function handleCheckout(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const paymentDetails = document.getElementById('payment-details').value;

    if (name && address && paymentDetails) {
        alert(`Order placed successfully!\nName: ${name}\nAddress: ${address}\nPayment Details: ${paymentDetails}`);
        cart.length = 0; // Clear the cart
        displayCart();
        document.getElementById('checkout-form').classList.add('hidden');
    } else {
        alert('Please fill in all the fields.');
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();

    document.getElementById('product-list').addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart')) {
            const productId = parseInt(e.target.getAttribute('data-id'));
            addToCart(productId);
        }
    });

    document.getElementById('cart-items').addEventListener('click', (e) => {
        const productId = parseInt(e.target.getAttribute('data-id'));
        if (e.target.classList.contains('increase-quantity')) {
            increaseQuantity(productId);
        } else if (e.target.classList.contains('decrease-quantity')) {
            decreaseQuantity(productId);
        } else if (e.target.classList.contains('remove-from-cart')) {
            removeFromCart(productId);
        }
    });

    document.getElementById('checkout-button').addEventListener('click', () => {
        document.getElementById('checkout-form').classList.remove('hidden');
    });

    document.getElementById('checkout-form').addEventListener('submit', handleCheckout);
});
