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
console.log("4: \n" + d1)

function fnctn(str, int) {
    return str.slice(int)
}
console.log("5: \n" + fnctn("foobar", 3))

/* 
let a = 33;
6. Tarkista onko jokin luku jaollinen kolmella. Jos on tulosta "jaollinen kolmella"
7. Tarkista onko jokin luku välillä 17 - 25. Jos on tulosta "on välillä 17 - 25"
*/

let num = 25;
if (num % 3 == 0) {
    console.log("6:\njaollinen kolmella")
}
else {
    console.log("6:\nei ole jaollinen kolmella")
}
if (num >= 17 && num <= 25) {
    console.log("7:\non välillä 17 - 25")
}
else {
    console.log("7:\nei ole välillä 17 - 25")
}

/*
1. Tehkää silmukka, joka käy läpi luvut 1-100 ja tulostaa luvun jos se on jaollinen seitsemällä
*/
for (let i = 1; i < 101; i++) {
    if (i % 7 == 0) {
        console.log(i)
    }
}