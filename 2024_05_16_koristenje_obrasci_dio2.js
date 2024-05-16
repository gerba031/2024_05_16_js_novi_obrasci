// učitavamo datoteku iz "obrasci.js"

var brojanje = require("./2024_05_16_obrasci_js");

// krenuli smo total walk = 0
console.log("Total steps = " + brojanje.getTotalSteps()); // 0

brojanje.walk();
console.log("Total steps = " + brojanje.getTotalSteps()); // 1 
brojanje.walk();
console.log("Total steps = " + brojanje.getTotalSteps()); // 2
brojanje.walk();
console.log("Total steps = " + brojanje.getTotalSteps()); // 3
brojanje.walk();
console.log("Total steps = " + brojanje.getTotalSteps()); // 4
brojanje.walk();
console.log("Total steps = " + brojanje.getTotalSteps()); // 5
brojanje.walk();
console.log("Total steps = " + brojanje.getTotalSteps()); // 6
brojanje.run();

var total = brojanje.getTotalSteps();                     
console.log("Total steps = " + total);                    // 11


