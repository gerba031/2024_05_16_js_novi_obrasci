// 1. napišite promise koji čeka funkciju getX, i na resolved reagira sa console.log-om vrijednosti vraćene vrijednosti, a na reject reagira sa conosole.log "oh no"
// 2. ako već niste prepišite sve funkcije u arrow funkcije

/* function getX() {
    return.Math.random() >=0.5;
}*/

const getX = () => Math.random() >= 0.5;

var ispisi = new Promise(function (resolve, reject) {
    //console.log("pozvan promise object")
    let x = getX();
    console.log("X = " + x);
    if (x) {
        return setTimeout(() => resolve(x), 1000);
    }
    return setTimeout(reject, 1000);
})

    .then((vrijednost) => console.log("neka vrijednost " + vrijednost))
    .catch(() => console.log("oh no!"));
