let cart = [];
let prodId = 0;

function addProduct() {
  let product = document.getElementById("txtProduct").value;
  cart.push(product);
  displayCart();
  updateNumberProduct();
}
function displayCart() {
  let newProduct = document.getElementById("txtProduct").value;
  let item = ` <li id="${prodId}"> ${newProduct} </li> `;
  const ul = document.getElementById("productList");
  ul.innerHTML += item;
  prodId++;
}
function updateNumberProduct() {
  document.getElementById("amountProducts").innerHTML = cart.length;
}
// function deleteProduct() {
//   const singleProd = document.getElementById(prodId);
//   console.log(prodId);
//   singleProd.remove();
//   cart.pop;
//   updateNumberProduct();
// }
