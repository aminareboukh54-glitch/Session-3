let ventes = [110, 75, 150, 180, 90, 130, 100, 160];
let nombreVentes = ventes.length;
 let somme = 0;
 let max = ventes[0];
 let min = ventes[0];
 let nbExceptionnelles = 0;
 let sommeExceptionnelles = 0;

 
for (let i = 0; i < ventes.length; i++) {
    let vente = ventes[i];

    
    somme = somme + vente;

    
    if (vente > max) {
        max = vente;
    }

    
    if (vente < min) {
        min = vente;
    }

    
    if (vente >= 130) {
        nbExceptionnelles++;
        sommeExceptionnelles = sommeExceptionnelles + vente;
    }
}


console.log("Nombre total de ventes :", nombreVentes);
console.log("Chiffre d'affaires total :", somme);
console.log("Vente maximum :", max);
console.log("Vente minimum :", min);
console.log("Nombre de ventes exceptionnelles :", nbExceptionnelles);
console.log("CA des ventes exceptionnelles :", sommeExceptionnelles);