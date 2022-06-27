let question = prompt ("Which operation do you want to perform? e.g +, -, / or *")

let num1 = parseInt(prompt("First number: "));
let num2 = parseInt(prompt("Second number: "));

if (question == "+") {
    console.log(num1 + num2)
} else if (question == "-") {
    console.log(num1 - num2)
} else if (question == "/") {
    console.log(num1 / num2);
} else if (question == "*") {
    console.log(num1 * num2);
}

