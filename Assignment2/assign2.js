function createProduct() {
  let name = prompt("What is the products name?");
  let price = Number(prompt("What is the price?"));
  let quantity = Number(prompt("What is the quantity?"));
  let subtotal = Number((price * quantity).toFixed(2));
  let tax = Number(subtotal * 0.0725);
  let total = (subtotal + tax).toFixed(2);
  document.getElementById("productInfo").innerHTML = `
    <h2>Product Data</h2>
        <p>Name: ${name}</p>
        <p>Subtotal: ${subtotal}</p>
        <p>Total: ${total}</p>
  `;
}
