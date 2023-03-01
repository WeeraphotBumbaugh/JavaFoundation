// function sayHello(param1) {
//   console.log("Hello " + param1);
// }
// let name = prompt("What is your name?");
// sayHello(name);
// function sum(num1, num2) {
//   console.log(num1 + num2);
// }
// sum(10, 20);

function registerStudent() {
  console.log("Register function");
  let name = prompt("What is your name?");
  let email = prompt("What is your email?");
  let grade101 = Number(prompt("What is your grade for 101?"));
  let grade102 = Number(prompt("What is your grade for 102?"));
  let grade103 = Number(prompt("What is your grade for 103?"));
  let gpa = (grade101 + grade102 + grade103) / 3;

  document.getElementById("studentInfo").innerHTML = `
    <h2>Student Data</h2>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>GPA: ${gpa}</p>
  `;
}
