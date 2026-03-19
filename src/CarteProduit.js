// Français : Composant d'affichage d'un produit
// English: Product display component
// Español: Componente de visualización de producto
// Deutsch: Produktanzeigekomponente
// Italiano: Componente di visualizzazione prodotto

function CarteProduit({nom, prix, stock}) {
  // Français : Détermination du statut de stock
  // English: Determining stock status
  // Español: Determinación del estado de stock
  // Deutsch: Bestimmung des Lagerbestandsstatus
  // Italiano: Determinazione dello stato delle scorte
  const disponibilite = stock > 0 ? 'En stock' : 'Rupture';
  const couleurDispo = stock > 0 ? 'green' : 'red';

  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '5px',
      padding: '15px',
      margin: '10px 0',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h4 style={{margin: '0 0 10px 0'}}>{nom}</h4>
      <p style={{margin: '5px 0'}}>Prix : {prix} euros</p>
      <p style={{margin: '5px 0', color: couleurDispo}}>Stock : {disponibilite}</p>
    </div>
  );
}

export default CarteProduit;