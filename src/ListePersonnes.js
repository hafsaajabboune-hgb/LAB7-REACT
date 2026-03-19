// Français : Composant avec Render Props pour afficher une liste de personnes
// English: Component with Render Props to display a list of people
// Español: Componente con Render Props para mostrar una lista de personas
// Deutsch: Komponente mit Render Props zur Anzeige einer Personenliste
// Italiano: Componente con Render Props per visualizzare un elenco di persone

function ListePersonnes({ children }) {
  // Français : Données statiques des participantes
  // English: Static data of participants
  // Español: Datos estáticos de las participantes
  // Deutsch: Statische Daten der Teilnehmerinnen
  // Italiano: Dati statici delle partecipanti
  const personnes = ['Hafsa', 'Fatimaazzahra', 'Sara', 'Loubna'];
  
  // Français : La fonction children reçoit les données et retourne du JSX
  // English: The children function receives data and returns JSX
  // Español: La función children recibe los datos y devuelve JSX
  // Deutsch: Die children-Funktion erhält Daten und gibt JSX zurück
  // Italiano: La funzione children riceve i dati e restituisce JSX
  return <div style={{border: '1px solid #ccc', padding: '15px'}}>{children(personnes)}</div>;
}

export default ListePersonnes;