// Français : Higher-Order Component qui ajoute une fonctionnalité de surveillance
// English: Higher-Order Component that adds a monitoring feature
// Español: Componente de orden superior que añade una funcionalidad de monitoreo
// Deutsch: Higher-Order-Komponente, die eine Überwachungsfunktion hinzufügt
// Italiano: Componente di ordine superiore che aggiunge una funzionalità di monitoraggio

function avecSurveillance(ComposantEmballé) {
  // Français : Retourne un nouveau composant enrichi
  // English: Returns a new enhanced component
  // Español: Retorna un nuevo componente enriquecido
  // Deutsch: Gibt eine neue erweiterte Komponente zurück
  // Italiano: Restituisce un nuovo componente arricchito
  return function ComposantAvecSuivi(propriétés) {
    // Français : Affiche les props dans la console à des fins de débogage
    // English: Displays props in the console for debugging purposes
    // Español: Muestra las props en la consola con fines de depuración
    // Deutsch: Zeigt die Props zu Debugging-Zwecken in der Konsole an
    // Italiano: Visualizza le props nella console a scopo di debug
    console.log('Surveillance active - Propriétés reçues:', propriétés);
    console.log('Moment de la surveillance:', new Date().toLocaleString());
    
    // Français : Transmet toutes les props au composant original
    // English: Passes all props to the original component
    // Español: Transmite todas las props al componente original
    // Deutsch: Übergibt alle Props an die ursprüngliche Komponente
    // Italiano: Trasmette tutte le props al componente originale
    return <ComposantEmballé {...propriétés} />;
  };
}

export default avecSurveillance;