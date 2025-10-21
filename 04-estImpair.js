/*
  Énoncé :
  Écris une fonction `estImpair(n)` qui retourne :
    - true si `n` est un entier impair
    - false si `n` est un entier pair
    - null pour les entrées non numériques ou invalides

  Signature attendue :
    function estImpair(n) -> boolean | null

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/
function estImpair(n) {
  // Vérifie si n est un nombre valide
  if (typeof n !== "number" || !Number.isFinite(n)) {
    return null;
  }

  // Si n n'est pas un entier, il n'est pas impair → retourne false
  if (!Number.isInteger(n)) {
    return false;
  }

  // Retourne true si impair, false sinon
  return n % 2 !== 0;
}

console.log(estImpair(2.5))

// Ne pas modifier la ligne ci-dessous
module.exports = { estImpair };
