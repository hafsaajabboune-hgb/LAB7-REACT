// Français : Composant simple pour afficher un message de bienvenue
// English: Simple component to display a welcome message
// Español: Componente simple para mostrar un mensaje de bienvenida
// Deutsch: Einfache Komponente zur Anzeige einer Willkommensnachricht
// Italiano: Componente semplice per visualizzare un messaggio di benvenuto

function MessageBienvenue({ visiteur }) {
  return <h3>Bienvenue sur notre site, {visiteur} !</h3>;
}

export default MessageBienvenue;