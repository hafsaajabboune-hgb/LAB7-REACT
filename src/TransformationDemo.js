// French/English: Démonstration de la transformation JSX / JSX transformation demo

function TransformationDemo() {
  // FR: Écrit en syntaxe JSX / EN: Written in JSX syntax
  const elementJsxSimplifie = <h2 className="titre-secondaire">Apprentissage JSX</h2>;

  // FR: Équivalent en JavaScript pur / EN: Pure JavaScript equivalent
  const elementJsOriginal = React.createElement(
    'h2',
    { className: 'titre-secondaire' },
    'Apprentissage JavaScript pur'
  );

  return (
    <div className="conteneur-demo">
      {elementJsxSimplifie}
      {elementJsOriginal}
      {/* FR: htmlFor au lieu de for / EN: htmlFor instead of for */}
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
