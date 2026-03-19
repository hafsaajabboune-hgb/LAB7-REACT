// Français : Composant de bouton réutilisable
// English: Reusable button component
// Español: Componente de botón reutilizable
// Deutsch: Wiederverwendbare Button-Komponente
// Italiano: Componente pulsante riutilizzabile

function BoutonAction(props) {
  // Français : Style inline pour le bouton
  // English: Inline styles for the button
  // Español: Estilos en línea para el botón
  // Deutsch: Inline-Stile für den Button
  // Italiano: Stili inline per il pulsante
  return <button style={{padding: '10px', margin: '5px'}}>{props.texte}</button>;
}

export default BoutonAction;