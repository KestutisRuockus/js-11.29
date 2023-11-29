// Duomenu tipo keitimo
let skaiciausTekstas = "-12.7";
console.log(typeof skaiciausTekstas);

// ParseInt(skaiciausTekstas) funkcija, gaaun tik sveikuosius skaicius
skaiciausTekstas = parseInt(skaiciausTekstas);
console.log(typeof skaiciausTekstas);

// unary operator
let skaicius = +skaiciausTekstas;
console.log(typeof skaicius);

// Number funcija
skaicius = Number(skaiciausTekstas);
console.log(typeof skaicius);

// Math

skaicius = 13.7;
// Apvalinimas i artimesne puse
let roundedSkaicius = Math.round(skaicius);
console.log("suapvalinta reiksme: " + skaicius);

// Apvalinimas i mazesne puse
roundedSkaicius = Math.floor(skaicius);
console.log("suapvalinta reiksme i mazaja puse: " + roundedSkaicius);

// Apvalinimas i didesne puse
roundedSkaicius = Math.ceil(skaicius);
console.log("suapvalinta reiksme i didziaja puse: " + roundedSkaicius);

// skaiciaus konvertavimas i string duomenu tipa

skaicius = 12.7;

let valiuta = skaicius.toFixed(2);
// convert to number
valiuta = +valiuta;
console.log(valiuta);
console.log(typeof valiuta);

let tekstasSkaicius = skaicius + "";
console.log(typeof tekstasSkaicius + ", jo reiksme " + tekstasSkaicius);

tekstasSkaicius = skaicius.toString();
tekstasSkaicius = String(skaicius);

console.log("----------------------------------------");
console.log("----------------------------------------");
console.log("----------------------------------------");

// teksto, simbolio paieska stringe
let eilerastis = "Ruosesi ozys ganytis, zole zlemzti, miske vartytis ozys";
console.log(eilerastis);

let ozysPosition = eilerastis.indexOf("ozys");
let ozysPositionLast = eilerastis.lastIndexOf("miske");
console.log(ozysPosition);
console.log(ozysPositionLast);

// gauti teksto dali is string  -  substring(pradinePozicija, galutinePozicija)
let ozysText = eilerastis.substring(ozysPosition, ozysPositionLast + 5);
console.log(ozysText);

// string atitikmenu keitimas

// visu atitikmenu keitimas
let kitasGyvunas = "medis";
let kitasEilerastis = eilerastis.replaceAll("ozys", kitasGyvunas);
console.log(kitasEilerastis);

// pirmo atitikimo keitimas
kitasEilerastis = eilerastis.replace("ozys", "varna");
console.log(kitasEilerastis);

// kovertuoti teksta
console.log(eilerastis.toLocaleUpperCase());
console.log(eilerastis.toLowerCase());

// teksto dalies paemimas slice(pradzios indeksas, gulutinis indeksas)
let text = "apple, banana, kiwi";
let part = text.slice(7, 13); // nuo pozicijos iki pozicijos
console.log(part);

part = text.slice(0, -6); // neigiamas antrasis parametras nupjauna galinius simbolius
console.log(part);

part = text.slice(7); // teksto paemimas nuo pasirinkto indekso
console.log(part);

part = text.slice(-4); // teksto paemimas nuo pasirinkto indekso is desines puse nuo galo
console.log(part);

// validacija, ar stringe yra tam tikri simboliai
if (eilerastis.includes("ganytis")) {
  console.log('stringe zodis "ganytis" yra');
} else {
  console.log('stringe zodzio "ganytis" nera');
}
