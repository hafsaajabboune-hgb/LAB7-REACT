// Français : Démonstration de la transformation JSX en JavaScript pur
// English: Demonstration of JSX transformation into pure JavaScript
// Español: Demostración de la transformación de JSX a JavaScript puro
// Deutsch: Demonstration der JSX-Transformation in reines JavaScript
// Italiano: Dimostrazione della trasformazione JSX in JavaScript puro

function TransformationDemo() {
  // Français : Élément écrit en syntaxe JSX (plus lisible)
  // English: Element written in JSX syntax (more readable)
  // Español: Elemento escrito en sintaxis JSX (más legible)
  // Deutsch: Element in JSX-Syntax geschrieben (lesbarer)
  // Italiano: Elemento scritto in sintassi JSX (più leggibile)
  const elementJsxSimplifie = <h2 className="titre-secondaire">Apprentissage JSX</h2>;

  // Français : Équivalent en JavaScript pur avec React.createElement
  // English: Equivalent in pure JavaScript with React.createElement
  // Español: Equivalente en JavaScript puro con React.createElement
  // Deutsch: Äquivalent in reinem JavaScript mit React.createElement
  // Italiano: Equivalente in JavaScript puro con React.createElement
  const elementJsOriginal = React.createElement(
    'h2',
    { className: 'titre-secondaire' },
    'Apprentissage JavaScript pur'
  );

  return (
    <div className="conteneur-demo">
      {elementJsxSimplifie}
      {elementJsOriginal}
      {/* Français: Exemple d'utilisation de htmlFor au lieu de for */}
      {/* English: Example of using htmlFor instead of for */}
      {/* Español: Ejemplo de uso de htmlFor en lugar de for */}
      {/* Deutsch: Beispiel für die Verwendung von htmlFor anstelle von for */}
      {/* Italiano: Esempio di utilizzo di htmlFor invece di for */}
      <div style={{marginTop: '20px'}}>
        <label htmlFor="champ-saisie">Saisissez votre ville :</label>
        <input 
          id="champ-saisie" 
          type="text" 
          placeholder="Ex: Paris"
          style={{marginLeft: '10px', padding: '5px'}}
        />
      </div>
    </div>
  );
}

export default TransformationDemo;