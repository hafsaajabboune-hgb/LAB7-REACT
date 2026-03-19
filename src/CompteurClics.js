// Français : Composant avec état pour compter les clics
// English: Stateful component to count clicks
// Español: Componente con estado para contar clics
// Deutsch: Stateful-Komponente zum Zählen von Klicks
// Italiano: Componente con stato per contare i clic

import { useState } from 'react';

function CompteurClics() {
  // Français : Déclaration des états du composant
  // English: Declaration of component states
  // Español: Declaración de los estados del componente
  // Deutsch: Deklaration der Komponentenzustände
  // Italiano: Dichiarazione degli stati del componente
  const [nombre, setNombre] = useState(0);

  return (
    <div style={{margin: '20px 0'}}>
      <p>Nombre de clics : {nombre}</p>
      {/* Français: Gestionnaire d'événement pour incrémenter le compteur */}
      {/* English: Event handler to increment the counter */}
      {/* Español: Manejador de eventos para incrementar el contador */}
      {/* Deutsch: Ereignisbehandlung zum Erhöhen des Zählers */}
      {/* Italiano: Gestore di eventi per incrementare il contatore */}
      <button onClick={() => setNombre(nombre + 1)}>Cliquez ici</button>
      {/* Français: Affichage conditionnel d'un message */}
      {/* English: Conditional display of a message */}
      {/* Español: Visualización condicional de un mensaje */}
      {/* Deutsch: Bedingte Anzeige einer Nachricht */}
      {/* Italiano: Visualizzazione condizionale di un messaggio */}
      {nombre > 5 && <p style={{color: 'green'}}>Bravo ! Vous avez cliqué 5 fois !</p>}
    </div>
  );
}

export default CompteurClics;