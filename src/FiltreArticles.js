// French/English: Filtre d'articles avec Render Props / Article filter with Render Props

import { useState } from 'react';

function FiltreArticles({children}) {
  // FR: État pour la catégorie / EN: Category state
  const [categorieSelectionnee, setCategorieSelectionnee] = useState('tous');
  
  // FR: Données des articles personnalisés / EN: Custom articles data
  const articles = [
    {id: 1, nom: 'Téléphone Hafsa', categorie: 'telephonie', prix: 899},
    {id: 2, nom: 'Ordinateur Fatima', categorie: 'informatique', prix: 599},
    {id: 3, nom: 'Casque Sara', categorie: 'audio', prix: 129},
    {id: 4, nom: 'Souris Loubna', categorie: 'informatique', prix: 39},
    {id: 5, nom: 'Enceinte Hafsa', categorie: 'audio', prix: 79},
    {id: 6, nom: 'Chargeur Fatima', categorie: 'telephonie', prix: 29}
  ];

  // FR: Catégories uniques / EN: Unique categories
  const categories = ['tous', ...new Set(articles.map(a => a.categorie))];

  // FR: Filtrage des articles / EN: Filtering articles
  const articlesFiltres = categorieSelectionnee === 'tous' 
    ? articles 
    : articles.filter(a => a.categorie === categorieSelectionnee);

  return (
    <div style={{
      border: '2px solid #2196f3',
      borderRadius: '8px',
      padding: '20px',
      margin: '20px 0'
    }}>
      <h3>Catalogue d'articles</h3>
      
      {/* FR: Interface de filtrage / EN: Filtering interface */}
      <div style={{marginBottom: '20px'}}>
        <label htmlFor="categorie" style={{marginRight: '10px'}}>Filtrer par categorie :</label>
        <select 
          id="categorie"
          value={categorieSelectionnee}
          onChange={(e) => setCategorieSelectionnee(e.target.value)}
          style={{
            padding: '8px',
            borderRadius: '4px',
            border: '1px solid #ccc'
          }}
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat === 'tous' ? 'Tous les articles' : cat}
            </option>
          ))}
        </select>
      </div>

      {/* FR: Passage des données à children / EN: Passing data to children */}
      {children({
        articles: articlesFiltres,
        total: articlesFiltres.length
      })}
    </div>
  );
}

export default FiltreArticles;
