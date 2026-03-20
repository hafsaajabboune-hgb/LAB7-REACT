// French/English: Higher-Order Component pour surveillance / Higher-Order Component for monitoring

function avecSurveillance(ComposantEmballé) {
  // FR: Retourne un composant enrichi / EN: Returns an enhanced component
  return function ComposantAvecSuivi(propriétés) {
    // FR: Affiche les props dans la console / EN: Displays props in console
    console.log('Surveillance active - Propriétés reçues:', propriétés);
    console.log('Moment de la surveillance:', new Date().toLocaleString());
    
    // FR: Transmet toutes les props / EN: Passes all props through
    return <ComposantEmballé {...propriétés} />;
  };
}

export default avecSurveillance;
