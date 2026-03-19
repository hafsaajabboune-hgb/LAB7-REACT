// Français : Tests d'intégration pour le composant CompteurClics
// English: Integration tests for the CompteurClics component
// Español: Pruebas de integración para el componente CompteurClics
// Deutsch: Integrationstests für die CompteurClics-Komponente
// Italiano: Test di integrazione per il componente CompteurClics

import { render, screen, fireEvent } from '@testing-library/react';
import CompteurClics from './CompteurClics';

// Français : Teste l'incrémentation du compteur
// English: Tests counter incrementation
// Español: Prueba la incrementación del contador
// Deutsch: Testet die Zählererhöhung
// Italiano: Testa l'incremento del contatore
test('le compteur augmente après chaque clic', () => {
  render(<CompteurClics />);
  
  const bouton = screen.getByText('Cliquez ici');
  fireEvent.click(bouton);
  
  expect(screen.getByText('Nombre de clics : 1')).toBeInTheDocument();
});

// Français : Teste l'affichage du message après 5 clics
// English: Tests message display after 5 clicks
// Español: Prueba la visualización del mensaje después de 5 clics
// Deutsch: Testet die Nachrichtenanzeige nach 5 Klicks
// Italiano: Testa la visualizzazione del messaggio dopo 5 clic
test('affiche un message après 5 clics', () => {
  render(<CompteurClics />);
  
  const bouton = screen.getByText('Cliquez ici');
  
  for(let i = 0; i < 6; i++) {
    fireEvent.click(bouton);
  }
  
  expect(screen.getByText('Bravo ! Vous avez cliqué 5 fois !')).toBeInTheDocument();
});