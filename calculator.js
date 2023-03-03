function Calculator() {
  let num1 = Number(prompt("Enter a number:"));
  let op = prompt("Enter an operator: +, -, *, /");
  let num2 = Number(prompt("Enter another number:"));
  let sum = 0;
  switch (op) {
    case "+":
      sum = num1 + num2;
      break;
    case "-":
      sum = num1 - num2;
      break;
    case "*":
      sum = num1 * num2;
      break;
    case "/":
      sum = num1 / num2;
      break;
    default:
      console.log("Invalid Option");
      break;
  }
  document.getElementById(
    "results"
  ).innerHTML = `<h3>${num1} ${op} ${num2} = ${sum}</h3>`;
}
