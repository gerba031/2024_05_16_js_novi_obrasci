const bark = () => "wuf wuf";

const barkx = function bark2() {
    return "wuf wuf";
};

console.log(bark);
console.log(barkx);


const myArray = ["ime 1", "ime 2", "ime 3"];

console.log(".-...---.---.");

myArray.forEach((element) => {
    console.log(element);
    return element;
});

console.log(".-...---.---.");

myArray.forEach((element) => {
    console.log(element);
    return element;
});

console.log(".-...---.---.");

class Dog {
    constructor(){
        console.log("x");
    }
    imePsa = "Rex";
    vrsta = "Seoski pas";
    godine = 1;
}

class GoldenRetriver extends Dog {
    constructor(godine, vrsta) {
        super(godine);
        this.godine = godine;
        this.vrsta = vrsta;
    }
}

const dog1 = new Dog();
const dog2 = new GoldenRetriver(10, "Zlatni retriver");

console.log("Dog1 name = " + dog1.imePsa);
console.log("Dog1 godine = " + dog1.godine);
console.log("Dog1 vrsta = " + dog1.vrsta);

console.log("-.,ć-.,-.,-.,-.,-.,-.,-.,-.,-.");

console.log("Dog2 name = " + dog2.imePsa);
console.log("Dog2 godine = " + dog2.godine);
console.log("Dog2 vrsta = " + dog2.vrsta);






console.log(".-...---.---.");

function getX() {
    return Math.random() >= 0.5;
}

var wait = new Promise((resolve, reject) => {
    const x = getX();

    if (x) {
        return setTimeout(resolve, 1000);
    }
    return setTimeout(reject, 1000);
})

    .then(() => console.log("yay!"))
    .catch(() => console.log("oh no!"));


