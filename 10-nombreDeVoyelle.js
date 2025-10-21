/*
  Énoncé :
  Écris une fonction `nombreDeVoyelles(phrase)` qui retourne le nombre de voyelles
  (a, e, i, o, u, y) dans une chaîne, insensible à la casse.

  Signature attendue :
    function nombreDeVoyelles(phrase) -> number

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/
function nombreDeVoyelles(phrase) {
  if (typeof phrase !== "string") return 0; // entrée non valide

  const voyelles = "aeiouy";
  let count = 0;

  // Parcours chaque caractère de la phrase
  for (let char of phrase.toLowerCase()) {
    if (voyelles.includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(nombreDeVoyelles("Bonjour le monde"));
// Ne pas modifier la ligne ci-dessous
module.exports = { nombreDeVoyelles }
