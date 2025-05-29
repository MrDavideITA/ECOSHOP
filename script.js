let cart = [];
const cartItems = document.getElementById("cart-items");
const totalDisplay = document.getElementById("total");

function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  renderCart();
}

function renderCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} – €${item.price.toFixed(2)}`;
    cartItems.appendChild(li);
    total += item.price;
  });

  totalDisplay.textContent = `Totale: €${total.toFixed(2)}`;
}
