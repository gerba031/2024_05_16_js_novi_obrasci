// consturctor osoba 
function Osoba() {
    (this.ime = "Ana"),
        (this.godine = 25);
}

var osoba1 = new Osoba();     // kreiranje nove istance objekta
osoba1.pozdrav = function () {
    return "ciao";
};
osoba1.brojCipela = 38;
console.log("Osoba1 => ime: " + osoba1.ime + "; ima godina: " + osoba1.godine + "; brojCipela: " + osoba1.brojCipela + "; pozdrav: " + osoba1.pozdrav());


Osoba.prototype.spol = "Žensko";

console.log("Osoba1 => ime: " + osoba1.ime + "; ima godina: " + osoba1.godine + "; spol: " + osoba1.spol);


var osoba2 = new Osoba();    // kreiranje nove istance objekta

osoba2.brojCipela = 36;
osoba2.ime = "Marko";
osoba2.spol = "Muški";
osoba2.pozdrav = function () {
    return "bok";
};
console.log("Osoba2 => ime: " + osoba2.ime + "; ima godina: " + osoba2.godine + "; brojCipela: " + osoba2.brojCipela + "; spol: " + osoba2.spol + "; pozdrav: " + osoba2.pozdrav());



