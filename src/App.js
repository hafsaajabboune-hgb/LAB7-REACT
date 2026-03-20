// French/English: Composant principal / Main component

import TransformationDemo from './TransformationDemo';
import BoutonSurveillé from './BoutonSurveillé';
import ListePersonnes from './ListePersonnes';
import MessageBienvenue from './MessageBienvenue';
import CompteurClics from './CompteurClics';
import ProduitAvecHorodatage from './ProduitAvecHorodatage';
import FiltreArticles from './FiltreArticles';
import FormulaireInscription from './FormulaireInscription';

function App() {
  return (
    <div style={{
      maxWidth: '900px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{color: '#333', borderBottom: '2px solid #333', paddingBottom: '10px'}}>
        Atelier React - Exercices pratiques
      </h1>
      
      {/* FR: Section JSX / EN: JSX Section */}
      <section style={{marginBottom: '40px'}}>
        <h2 style={{color: '#0066cc'}}>Partie 1 - Demonstration JSX</h2>
        <TransformationDemo />
      </section>

      {/* FR: Section HOC / EN: HOC Section */}
      <section style={{marginBottom: '40px'}}>
        <h2 style={{color: '#0066cc'}}>Partie 2 - Higher-Order Component</h2>
        <BoutonSurveillé texte="Cliquez pour tester" />
        <ProduitAvecHorodatage nom="Ordinateur portable" prix={899} stock={5} />
      </section>

      {/* FR: Section Render Props / EN: Render Props Section */}
      <section style={{marginBottom: '40px'}}>
        <h2 style={{color: '#0066cc'}}>Partie 3 - Render Props</h2>
        
        <h3>Annuaire des participantes :</h3>
        <ListePersonnes>
          {(personnes) => (
            <div>
              <ol style={{backgroundColor: '#f9f9f9', padding: '15px 30px', borderRadius: '5px'}}>
                {personnes.map((nom, index) => (
                  <li key={index} style={{margin: '8px 0', fontSize: '16px'}}>
                    <strong>{nom}</strong>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </ListePersonnes>

        <h3 style={{marginTop: '30px'}}>Catalogue d'articles personnalisés :</h3>
        <FiltreArticles>
          {({articles, total}) => (
            <div>
              <p style={{fontWeight: 'bold'}}>Nombre d'articles trouvés : {total}</p>
              <div style={{display: 'grid', gap: '12px', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))'}}>
                {articles.map(article => (
                  <div key={article.id} style={{
                    border: '1px solid #2196f3',
                    borderRadius: '8px',
                    padding: '15px',
                    backgroundColor: '#e3f2fd'
                  }}>
                    <strong style={{fontSize: '16px'}}>{article.nom}</strong>
                    <p style={{margin: '8px 0 0 0', color: '#2196f3'}}>Prix : {article.prix} euros</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </FiltreArticles>
      </section>

      {/* FR: Section Tests / EN: Tests Section */}
      <section style={{marginBottom: '40px'}}>
        <h2 style={{color: '#0066cc'}}>Partie 4 - Tests et formulaire</h2>
        
        <div style={{display: 'grid', gap: '20px', gridTemplateColumns: '1fr 1fr'}}>
          <div>
            <h3>Messages de bienvenue :</h3>
            <MessageBienvenue visiteur="Hafsa" />
            <MessageBienvenue visiteur="Fatimaazzahra" />
            <MessageBienvenue visiteur="Sara" />
            <MessageBienvenue visiteur="Loubna" />
          </div>
          
          <div>
            <h3>Compteur d'interactions :</h3>
            <CompteurClics />
          </div>
        </div>

        <div style={{marginTop: '30px'}}>
          <h3>Formulaire d'inscription :</h3>
          <FormulaireInscription />
        </div>
      </section>

      {/* FR: Pied de page / EN: Footer */}
      <footer style={{
        marginTop: '50px',
        padding: '20px',
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderRadius: '5px'
      }}>
        <p>TP React réalisé avec les prénoms : Hafsa, Fatimaazzahra, Sara, Loubna</p>
      </footer>
    </div>
  );
}

export default App;
