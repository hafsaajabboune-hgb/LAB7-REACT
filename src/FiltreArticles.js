// Français : Composant avec Render Props pour filtrer une liste d'articles
// English: Component with Render Props to filter a list of articles
// Español: Componente con Render Props para filtrar una lista de artículos
// Deutsch: Komponente mit Render Props zum Filtern einer Artikelliste
// Italiano: Componente con Render Props per filtrare un elenco di articoli

import { useState } from 'react';

function FiltreArticles({children}) {
  // Français : État pour la catégorie sélectionnée
  // English: State for the selected category
  // Español: Estado para la categoría seleccionada
  // Deutsch: Zustand für die ausgewählte Kategorie
  // Italiano: Stato per la categoria selezionata
  const [categorieSelectionnee, setCategorieSelectionnee] = useState('tous');
  
  // Français : Données des articles
  // English: Articles data
  // Español: Datos de los artículos
  // Deutsch: Artikeldaten
  // Italiano: Dati degli articoli
  const articles = [
    {id: 1, nom: 'Téléphone Hafsa', categorie: 'telephonie', prix: 899},
    {id: 2, nom: 'Ordinateur Fatima', categorie: 'informatique', prix: 599},
    {id: 3, nom: 'Casque Sara', categorie: 'audio', prix: 129},
    {id: 4, nom: 'Souris Loubna', categorie: 'informatique', prix: 39},
    {id: 5, nom: 'Enceinte Hafsa', categorie: 'audio', prix: 79},
    {id: 6, nom: 'Chargeur Fatima', categorie: 'telephonie', prix: 29}
  ];

  // Français : Extraction des catégories uniques
  // English: Extraction of unique categories
  // Español: Extracción de categorías únicas
  // Deutsch: Extraktion eindeutiger Kategorien
  // Italiano: Estrazione delle categorie uniche
  const categories = ['tous', ...new Set(articles.map(a => a.categorie))];

  // Français : Filtrage des articles selon la catégorie sélectionnée
  // English: Filtering articles according to the selected category
  // Español: Filtrado de artículos según la categoría seleccionada
  // Deutsch: Filtern von Artikeln nach der ausgewählten Kategorie
  // Italiano: Filtraggio degli articoli in base alla categoria selezionata
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
      
      {/* Français: Interface de filtrage */}
      {/* English: Filtering interface */}
      {/* Español: Interfaz de filtrado */}
      {/* Deutsch: Filteroberfläche */}
      {/* Italiano: Interfaccia di filtraggio */}
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

      {/* Français: Passage des données filtrées à la fonction children */}
      {/* English: Passing filtered data to the children function */}
      {/* Español: Paso de datos filtrados a la función children */}
      {/* Deutsch: Übergabe gefilterter Daten an die children-Funktion */}
      {/* Italiano: Passaggio dei dati filtrati alla funzione children */}
      {children({
        articles: articlesFiltres,
        total: articlesFiltres.length
      })}
    </div>
  );
}

export default FiltreArticles;