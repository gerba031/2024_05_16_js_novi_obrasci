// 1.Pratite kod u script.js
// 2.Nađite prototip objekta "character" // (naputak: koristitie metode globalnog object objekta)
// Nađite prototip tog prototipa i ispisite ih
// 3. Doddajte prototipu objekta "character" funkciju koja vraća jedan slučajno odabran citat iz nis "quotes"


var character = {
    name: "Eleven",
    show: "Stranger things",
    portrayedBy: "Millie Bobby Brown",

};

const quotes = [
    "I'm going to my friends. I'm going home.",
    "Pure fuel! PURE FUEL! WOO!",
    "See? Zoomer.",
    "Bitchin."
];

var proto1 = Object.getPrototypeOf(character);
console.log(proto1);

var proto2 = Object.getPrototypeOf(proto1);
console.log(proto2);

proto1.dodaj = function () {
    let x = Math.random() * quotes.length;
    let flor = Math.floor(x);
    console.log("random=" + x);
    console.log("flor" + flor)
    return quotes[flor];      //return quotes[0] -*- pokazali da radi kod, sad treba zamjeniti nulti član i napraviti random odabir
};

console.log(proto1.dodaj());