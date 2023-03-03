let students = ["Bill", "Tom", "Jerry"];

for (let i = 0; i < students.length; i++) {
  document.write(`
    <li>${students[i]}</li>
    `);
}

let op = prompt("Enter an option");
switch (op) {
  case "1":
    console.log("Case 1");
    break;
  case "2":
    console.log("Case 2");
    break;
  default:
    console.log("Invalid Option");
    break;
}
