// French/English: Tests d'intégration / Integration tests

import { render, screen, fireEvent } from '@testing-library/react';
import CompteurClics from './CompteurClics';

// FR: Test d'incrémentation / EN: Increment test
test('le compteur augmente après chaque clic', () => {
  render(<CompteurClics />);
  
  const bouton = screen.getByText('Cliquez ici');
  fireEvent.click(bouton);
  
  expect(screen.getByText('Nombre de clics : 1')).toBeInTheDocument();
});

// FR: Test du message après 5 clics / EN: Message after 5 clicks test
test('affiche un message après 5 clics', () => {
  render(<CompteurClics />);
  
  const bouton = screen.getByText('Cliquez ici');
  
  for(let i = 0; i < 6; i++) {
    fireEvent.click(bouton);
  }
  
  expect(screen.getByText('Bravo ! Vous avez cliqué 5 fois !')).toBeInTheDocument();
});
