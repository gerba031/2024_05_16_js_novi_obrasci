//1. pratite kod u script.js, koje su vreijednosti y i z varijabli na kraju programa=

//2. od funkcije u prvom zadatku stvorite samopozivajuću anonimnu funkciju koja prima parametar "name" i kreirajte globalnu varijablu koju ta funkcija koristi i zadajte joj vrijednost

var x = "John Doe";
function vratiNesto(name) {
    var x = name;
    function f() {
        return x;
    }
    return f;
}

var y = vratiNesto("jane doe");
console.log(y); // -- y je postao funkcija

var z = vratiNesto()(); // --z = undefined = test

z = vratiNesto("test")()
console.log(z);

// 2.
console.log("-----------");

var name1 = "moje ime";
(function vratiNesto2(name1) {
    console.log(" invoked vratiNesto2(" + name1 + ")");
    var x = name1;
    function f() {
        console.log("invoked f()");
        return x;
    }
    return f;
})(name1);


