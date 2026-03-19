// Français : HOC qui ajoute un horodatage à n'importe quel composant
// English: HOC that adds a timestamp to any component
// Español: HOC que añade una marca de tiempo a cualquier componente
// Deutsch: HOC, der einen Zeitstempel zu jeder Komponente hinzufügt
// Italiano: HOC che aggiunge un timestamp a qualsiasi componente

function avecHorodatage(ComposantOriginal) {
  return function ComposantHorodate(props) {
    // Français : Récupération de la date et heure actuelles
    // English: Getting current date and time
    // Español: Obtención de la fecha y hora actuales
    // Deutsch: Aktuelles Datum und Uhrzeit abrufen
    // Italiano: Ottenimento della data e ora correnti
    const maintenant = new Date();
    const horodatage = maintenant.getHours() + ':' + maintenant.getMinutes() + ':' + maintenant.getSeconds();
    const dateJour = maintenant.getDate() + '/' + (maintenant.getMonth() + 1) + '/' + maintenant.getFullYear();

    return (
      <div style={{border: '1px dashed #ff9800', padding: '15px', margin: '10px 0'}}>
        {/* Français: Affichage de l'horodatage */}
        {/* English: Display of timestamp */}
        {/* Español: Visualización de la marca de tiempo */}
        {/* Deutsch: Anzeige des Zeitstempels */}
        {/* Italiano: Visualizzazione del timestamp */}
        <div style={{fontSize: '12px', color: '#666', marginBottom: '10px'}}>
          Derniere mise a jour : {dateJour} a {horodatage}
        </div>
        {/* Français: Rendu du composant original avec ses props */}
        {/* English: Rendering of the original component with its props */}
        {/* Español: Renderizado del componente original con sus props */}
        {/* Deutsch: Rendern der ursprünglichen Komponente mit ihren Props */}
        {/* Italiano: Rendering del componente originale con le sue props */}
        <ComposantOriginal {...props} />
      </div>
    );
  };
}

export default avecHorodatage;