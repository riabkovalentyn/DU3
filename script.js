//  Pole jmen
const firstNames = [
  "Jan","Petr","Pavel","Tomáš","Jiří",
  "Martin","Josef","David","Jakub","Karel",
  "Michal","Lukáš","Jaroslav","Václav","Roman",
  "Filip","Ondřej","Radek","Marek","Daniel",
  "Lucie","Eva","Marie","Tereza","Kateřina",
  "Hana","Jana","Petra","Barbora","Karolína",
  "Veronika","Kristýna","Monika","Markéta","Lenka",
  "Alena","Nikola","Eliška","Adéla","Natálie",
  "Zuzana","Klára","Andrea","Simona","Gabriela",
  "Aneta","Šárka","Helena","Ivana","Dagmar"
];

//  Pole  příjmení

const surnames = [
  "Novák","Svoboda","Novotný","Dvořák","Černý",
  "Procházka","Kučera","Veselý","Horák","Němec",
  "Marek","Pospíšil","Pokorný","Hájek","Král",
 
  "Benešová","Fialová","Sedláčková","Urbanová","Kolářová",
  "Šimková","Marková","Vlková","Konečná","Malá"
];

//  Funkce pro náhodný výběr položky z pole
function randomFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//  Generování náhodného data narození
//  podle věkového rozmezí (minAge – maxAge)
function randomBirthdate(minAge, maxAge) {
  const now = new Date();

  const minYear = now.getFullYear() - maxAge;
  const maxYear = now.getFullYear() - minAge;

  const year = Math.floor(Math.random() * (maxYear - minYear + 1)) + minYear;
  const month = Math.floor(Math.random() * 12);
  const day = Math.floor(Math.random() * 28) + 1;

  const date = new Date(year, month, day);
  return date.toISOString();
}

//  Hlavní funkce – generuje seznam zaměstnanců
function main(input) {
  const employees = [];

  for (let i = 0; i < input.count; i++) {

    // Náhodné pohlaví
    const gender = Math.random() < 0.5 ? "male" : "female";

    // Vytvoření jednoho zaměstnance
    const employee = {
      name: randomFromArray(firstNames),
      surname: randomFromArray(surnames),
      gender: gender,
      birthdate: randomBirthdate(input.minAge, input.maxAge),
      workload: randomFromArray([10, 20, 30, 40])
    };

    employees.push(employee);
  }

  return { employees };
}

//  Ukázka spuštění:
// console.log(main({ count: 5, minAge: 18, maxAge: 60 }));
