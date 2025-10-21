/*
  Énoncé :
  Écris une fonction nommée `multiplication(a, b)` qui retourne le résultat de a * b.

  Signature attendue :
    function multiplication(a, b) -> number

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/
function multiplication(a, b) {
  if (typeof a !== "number" || typeof b !== "number") return undefined;
  if (arguments.length !== 2) return undefined;
  
  const result = a * b;
  return result === 0 ? 0 : result;  // Force zéro positif
}

console.log(multiplication(2 , 3));    
console.log(multiplication(4 , 5)); 

module.exports = { multiplication };


// Ne pas modifier la ligne ci-dessous
module.exports = { multiplication }
