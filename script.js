/*
1. Muuta stringin "kauhava" ensimmäinen kirjain isoksi.
2. Poista stringistä "kala, hevonen, kana" sana kana.
3. Tulosta sanan "rovaniemi" viides kirjain.
4. Muuta string "yhden yön tarinoita" stringiksi "yhden päivän tarinoita".
5. Tee funktio, joka saa parametreiksi merkkijonon str ja kokonaisluvun x.
    Funktio palauttaa merkkijonon viimeiset x merkkiä
*/

let a = "kauhava";
let a1 = a.charAt(0).toUpperCase() + a.slice(1);
console.log("1: \n" + a1);

let b = "kala, hevonen, kana";
let b1 = b.replace("kana", "");
console.log("2: \n" + b1);

let c = "rovaniemi";
let c1 = c.charAt(4);
console.log("3: \n" + c1);

let d = "yhden yön tarinoita";
let d1 = d.replace("yön", "päivän");
console.log("4: \n" + d1);

function fnctn(str, int) {
  return str.slice(int);
}
console.log("5: \n" + fnctn("foobar", 3));

/* 
let a = 33;
6. Tarkista onko jokin luku jaollinen kolmella. Jos on tulosta "jaollinen kolmella"
7. Tarkista onko jokin luku välillä 17 - 25. Jos on tulosta "on välillä 17 - 25"
*/

let num = 25;
if (num % 3 == 0) {
  console.log("6:\njaollinen kolmella");
} else {
  console.log("6:\nei ole jaollinen kolmella");
}
if (num >= 17 && num <= 25) {
  console.log("7:\non välillä 17 - 25");
} else {
  console.log("7:\nei ole välillä 17 - 25");
}

/*
8. Tehkää silmukka, joka käy läpi luvut 1-100 ja tulostaa luvun jos se on jaollinen seitsemällä
*/
for (let i = 1; i < 101; i++) {
  if (i % 7 == 0) {
    console.log(i);
  }
}
/*
0. Muodosta lista, joka on 20 elementin pituinen ja 
    sisältää satunnaisia kokonaislukuja väliltä 1 - 500.
1. Poista listasta luvut, jotka ovat pienemiä kuin 10 ja suurempia kuin 30 ja tulosta se.
2. Plussaa listan joka elementtiin 5 ja tulosta lista
3. Etsi listasta ensimmäinen luku joka on > 20
4. Laita lista suuruusjärjestykseen
5. Tee funktio, joka tarkistaa onko sille annettu string parametri palidromi 
(eli onko sana lopusta alkuun sama kuin alusta loppuun. 
    Esim "saippuakauppias" on palindromi ja "otto" on palindromi)
6. Googlatkaa string template literal. Ja tutkikaa sitä.
Tulosta 10 kertaa "Numero 0", "Numero 1", kne allekkain.
Käytä string template literalia. Tee sama käyttäen string + -operaattoria
7. Tehkää 5-elementtinen lista l1, jonka elementit ovat 5-elementtisiä 
listoja (2-ulotteinen taulukko). Tulostakaa listoken indeksit. 
Esim x=1, y=2, missä x = listan l1 elementin indeksi ja 
y = siinä olevan listan indeksi.
esimerkki tulostus: x=0, y=0
                    x=0, y=1
                    x=0, y=1
                    ....
                    x=5, y=0

*/
let list = [8, 47, 16, 91, 75, 2, 22, 36, 17, 63];

// 0.
function getRandInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let randList = [];
for (let i = 1; i < 21; i++) {
  randList.push(getRandInt(1, 500));
}
console.log(randList);

// 1.
function removeNum(list) {
  return list.filter(function (num) {
    return num > 10 && num < 30;
  });
}
let removeNumList = removeNum(list);
console.log(removeNumList);

// 2.
let plusFive = list.map((x) => x + 5);
console.log(plusFive);

// 3.
function biggerThanTwenty(lista) {
  return lista.find((value) => value > 20);
}
let biggerThanTwentyNum = biggerThanTwenty(list);
console.log(biggerThanTwentyNum);

// 4.
let sortedList = list.sort(function (a, b) {
  return a - b;
});
console.log(sortedList);

// 5.
// palauttaa "true" jos on palindromi ja "false" jos ei
function checkPalindrome(str) {
  return str == str.split("").reverse().join("");
}
console.log(checkPalindrome("saippuakauppias"));

// 6.
for (let i = 0; i < 11; i++) {
  console.log(`Numero: ${i}`);
}
for (let i = 0; i < 11; i++) {
  console.log("Numero: " + i);
}

// 7.

let l1 = [
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
];
for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 6; j++) {
    console.log(`x=${i}, y=${j}`);
  }
}
console.log(l1);
