// French/English: Compteur avec état / Stateful counter

import { useState } from 'react';

function CompteurClics() {
  // FR: Déclaration des états / EN: State declarations
  const [nombre, setNombre] = useState(0);

  return (
    <div style={{margin: '20px 0'}}>
      <p>Nombre de clics : {nombre}</p>
      {/* FR: Gestionnaire de clic / EN: Click handler */}
      <button onClick={() => setNombre(nombre + 1)}>Cliquez ici</button>
      {/* FR: Affichage conditionnel / EN: Conditional rendering */}
      {nombre > 5 && <p style={{color: 'green'}}>Bravo ! Vous avez cliqué 5 fois !</p>}
    </div>
  );
}

export default CompteurClics;
