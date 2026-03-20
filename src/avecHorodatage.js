// French/English: HOC pour ajouter un horodatage / HOC to add timestamp

function avecHorodatage(ComposantOriginal) {
  return function ComposantHorodate(props) {
    // FR: Récupération de la date et heure / EN: Getting date and time
    const maintenant = new Date();
    const horodatage = maintenant.getHours() + ':' + maintenant.getMinutes() + ':' + maintenant.getSeconds();
    const dateJour = maintenant.getDate() + '/' + (maintenant.getMonth() + 1) + '/' + maintenant.getFullYear();

    return (
      <div style={{border: '1px dashed #ff9800', padding: '15px', margin: '10px 0'}}>
        {/* FR: Affichage de l'horodatage / EN: Timestamp display */}
        <div style={{fontSize: '12px', color: '#666', marginBottom: '10px'}}>
          Derniere mise a jour : {dateJour} a {horodatage}
        </div>
        {/* FR: Rendu du composant original / EN: Original component render */}
        <ComposantOriginal {...props} />
      </div>
    );
  };
}

export default avecHorodatage;
