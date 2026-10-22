
/* Exercice 2.1 : Parcours basique */

let jours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"];

for (let i = 0; i < jours.length; i++) {
    console.log("Jour de la semaine :", jours[i]);
}


/* Exercice 2.2 : Gymnastique d'index */

let couleurs = ["Rouge", "Vert", "Bleu", "Jaune", "Orange", "Violet"];

// Afficher les couleurs à l'envers
for (let i = couleurs.length - 1; i >= 0; i--) {
    console.log(couleurs[i]);
}

// Afficher les couleurs aux index pairs : 0, 2, 4
for (let i = 0; i < couleurs.length; i = i + 2) {
    console.log(couleurs[i]);
}


/* Exercice 2.3 : Décompte de fusée */

let sequence = ["Ignition", 1, 2, 3, 4, 5, "Préparation"];

// On commence à length - 1 car le dernier index
// est égal au nombre d'éléments moins 1.
for (let i = sequence.length - 1; i >= 0; i--) {
    console.log(sequence[i]);
}

console.log("Décollage !");
 
//exercice d'application

let prompt = require("prompt-sync")();

let notes = [];
let taille = Number(prompt("Donnez le nombres des notes : "));


for (let i = 0; i < taille; i++) {
    let note = Number(prompt("Donner une note : "));
    notes[i] = note;
}
let somme = 0;

for (let i = 0; i < notes.length; i++) {
  somme = somme + notes[i];
}

let moyenne = somme / taille;

console.log("La moyenne est : " + moyenne);
