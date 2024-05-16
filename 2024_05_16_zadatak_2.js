//1 dodajte Dog funkciji varijablu "name" koja se postavlja pri kreiranju objekta i označava ime psa. Defaultna vrijednost imena psa je "rex"
//2 Kreirajte objekt iz Dog funkcije
//3 dodajte Dog funkciji metodu koja vraća postavljeno ime psa - pozovite ju iz novostvorenog objekta i ispisite rezultat

//1. 
function Dog(name) {
    /*1. način "oneliner"
    this.dogName = name || "Rex";*/

    // 2. način pisanja if/else
    if (!name) {            // if(name==undefined) {
        this.dogName = "Rex";
    } else {
        this.dogName = name;
    }

}

//2. --> defaultno ime psa ukoliko ne prosliejdimo ime psa
var dog = new Dog();
print("ime psa default name = " + dog.dogName);

//2.b --> ako proslijedimo ime psa
var dog1 = new Dog("Loki");
print("Ime psa = " + dog1.dogName);


//3.

Dog.prototype.imePsa = function () {
    return this.dogName;
};

print("ime psa1 (dog) preko metode = " + dog.imePsa());
print("ime psa2 (dog2) preko metode = " + dog1.imePsa());

Dog.prototype.bark = function () {
    return "wuf wuf";
};

console.log("Pas1 (dog) se glasa = " + dog.bark());
print("Pas2 (dog2) se glasa = " + dog1.bark());


this.bojapsa = "Crna";

function print(intext){
   console.log(intext);
}

