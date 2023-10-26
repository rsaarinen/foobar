// 0. muodostakaa lista joka on 20 elementin pituinen ja sisältää 
//  satunnaisia kokonaislukuja väliltä 1- 50.

let list2 = [];
for (let i = 1; i <= 20; i++) {
    let rnd = Math.random() * 50 + 1;
    let el = Math.floor(rnd);
    list2.push(el);
}
console.log(list2);

// 1. poista listasta luvut, jotka ovat pienempiä kuin 10 ja suurempia 
// kuin 30 ja tulosta se. (vinkki: käyttäkää filter-metodia)
console.log("Tehtävä 1");
console.log("----------------");
function func(val) {
    return val >= 10 && val <= 30;
}
let l = list2.filter(func);
console.log("filteröity", l);

// 2. plussaa listan joka elementtiin 5 ja tulosta lista. Vinkki: käytä
//      map-metodia.
console.log("Tehtävä 2");
console.log("----------------");

function func30(el) {
    return el + 5;
}
let newList = list2.map(func30);
console.log("Mapattu:", list2, newList);
// 3. etsi listasta ensimmäinen luku joka on > 20. Vinkki:
//  käytä find-metodia

console.log("Tehtävä 3");
console.log("----------------");

function findFunc(el) {
    return el > 20;
}
let found = list2.find(findFunc);
console.log(found);
// 4. laita lista suuruusjärjestykseen. Vinkki: tutki ja käytä sort-metodia
console.log("Tehtävä 4");
console.log("----------------");

function sortFunc(a, b) {
    return a - b;
}
console.log(list2.sort(sortFunc));

// 5. tee funktio, joka tarkistaa onko sille annettu string-parametri
// palindromi (eli onko sana lopusta
//  alkuun sama kuin alusta loppuun. Esim. "saippuakauppias"
// on palindromi ja "otto" on palindromi).
//  Vinkki: muuta string ensin arrayksi, sitten käännä array
// päinvastaiseen järjestykseen ja sitten
// muuta se takaisin stringiksi ja vertaa onko se sama kuin alkuperäinen
// string. Tutki tarvittavia string ja array metodeja.
console.log("Tehtävä 5");
console.log("----------------");

let str3 = "saippua";
let arr = str3.split("");
console.log("Splitted", arr);
let arr2 = arr.reverse();
console.log("reversed", arr2);
let str4 = arr2.join("");
console.log("joined", str4);
if (str3 === str4) {
    console.log(str3, "on palindromi");
} else {
    console.log(str3, "ei ole palindromi");
}

// for-silmukka käyttämällä:

const pal = "sonni";
let isPal = true;
for (i = 0; i < pal.length / 2; i++) {
    if (pal[i] !== pal[pal.length - i - 1]) {
        isPal = false;
        break;
    }
}
if (isPal === true) {
    console.log(pal, "on palindromi");
} else {
    console.log(pal, "ei ole palindromi");
}


// 6. Googlatkaa string template literal. Ja tutkikaa sitä.
// Tulosta 10 kertaa "Numero 0", "Numero 1", jne allekkain.
// Käytä string template literalia. Tee sama käyttäen string +
// -operaattoria.
let arvo = 9;
console.log("Tehtävä 6");
console.log("----------------");
console.log(`tekstiä ${arvo}`);

console.log("string template literal");
for (let i = 0; i < 10; i++) {
    let str = `Numero ${i}`;
    console.log(str);
}

console.log("string + -operaattori");
for (let i = 0; i < 10; i++) {
    let str = "Numero " + i;
    console.log(str);
}

// 7. Tehkää 5-elementtinen lista l1, jonka elementit ovat 5-elementtisiä
//  listoja (2-ulotteinen taulukko). Tulostakaa listojen indeksit.
//  Esim x=1,y=2, missä x = listan l1 elementin indeksi ja
//  y = siinä olevan listan indeksi.
// esimerkki tulostus:  x=0,y=0
//                      x=0,y=1
//                      x=0,y=2
//                      ....
//                      x=5,y=0      
console.log("Tehtävä 7");
console.log("----------------");

let taulukko = [];
for (let i = 0; i < 5; i++) {
    let col = [];
    for (let j = 0; j < 5; j++) {
        console.log("     j =", j);
        col.push(j);
    }
    taulukko.push(col);
    console.log("i =", i);
}
// 8. Googlatkaa tai keksikää itse miten tyhjennetään lista.
// Yksi tapa on yksinkertaisesti
console.log("Tehtävä 8");
console.log("---------------");
let listEm = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(listEm);
listEm = [];
console.log("listEm = []:", listEm);
// Tässä tapauksessa listEm osoite muuttuu tyhjään listaan. Eli alku-
// peräiseen listaan ei ole enää viittausta. Tyhjentäkää lista, niin että
// alkuperäinen lista tyhjennetään eikä vaihdeta osoitetta tyhjään listaan.

// Asettamalla listan pituus nollaksi:
listEm = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
listEm.length = 0;
console.log("length = 0:", listEm);

// Kutsumalla listan pop()-funktiota niin kauan että se on tyhjä 
// (tehoton tapa):
listEm = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
while (listEm.length > 0) {
    listEm.pop();
}
console.log("pop:", listEm);

// Käyttämällä listan splice-funktiota:
listEm = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
listEm.splice(0, arr.length);
console.log("splice:", listEm);

// js spread operator (...) [7,8,89] ...list = 17 8 89
// esimerkki (listojen yhdistäminen):
const listA = [1, 2];
const listB = [3, 4];
const listC = [...listA, ...listB];
console.log(listC); // pitäisi tulostaa [1,2,3,4]

// Esimerkiksi Math.min -funktio saa parametreikseen joukon lukuja
// eli esim 
const min = Math.min(23, 9, 7, -1, 8);
console.log(min);
// mutta jos halutaan listan pienin luku esim listasta [5,92,753,2,0]
// pitää käyttää spread-operaattoria:
const luvut = [5, 92, 753, 2, 0];
const min2 = Math.min(...luvut);
console.log(min2);


// 9.Tutkikaa vähän spread operaattoria googlaamalla.
//Tehkää ohjelma jossa on
// kaksi listaa [1,2,3,4,5] ja [6,7,8,9,10]. Yhdistäkää ne käyttämällä
// spread operaattoria ja laittakaa väliin kaksi elementtiä
// "text1" ja "text2",niin että lopputulos on
// [1,2,3,4,5,"text1", "text2", 6,7,8,9,10]

const listD = [1, 2, 3, 4, 5];
const listE = [6, 7, 8, 9, 10];
const listF = [...listD, "text1", "text2", ...listE];
console.log("listF:", listF);

// 10. Tee funktio joka saa parametriksi listan ja laskee sen
//      elementtien summan.
//     Tässä tarvitaan listan reduce-funktiota.

function addElements(els) {
    function reduceFn(tot, n) {
        return tot + n;
    }
    const sum = els.reduce(reduceFn);
    return sum;
}

const elements = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sum = addElements(elements)
console.log("reduce: ", sum);


