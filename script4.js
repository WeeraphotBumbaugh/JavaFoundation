const numbers = [45, 4, 9, 25, 50];

let sum = numbers.reduce(myFunction);
document.getElementById("example").innerHtml = "The sum is:" + sum;
function myFunction(total, value) {
  return total + value;
}
