import { sayHello, sayGoodbye } from "./expGreeting.mjs";
import { formatDatePST } from "./expDate.mjs";

console.log(sayHello("Alice"));
console.log(sayGoodbye("Bob"));
console.log(formatDatePST(new Date()));

// import { sayHello, sayGoodbye } from "./expGreetingES6.mjs";
// import { formatDatePST } from "./expDateES6.mjs";
// import readline from 'readline';

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// // Prompt user for their name
// rl.question("Please enter your name: ", function(userName) {
//     // Close the readline interface
//     rl.close();

//     // Check if the user entered a name
//     if (userName) {
//         // Use the entered name in greetings
//         console.log(sayHello(userName));
//         console.log(sayGoodbye(userName));
//     } else {
//         console.log("No name entered.");
//     }

//     // Display the current date and time in PST
//     console.log(formatDatePST(new Date()));
// });
