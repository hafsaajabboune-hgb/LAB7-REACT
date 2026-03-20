// French/English: Tests unitaires / Unit tests

import { render, screen } from '@testing-library/react';
import MessageBienvenue from './MessageBienvenue';

// FR: Vérifie l'affichage du message / EN: Checks message display
test('affiche un message personnalisé pour le visiteur', () => {
  render(<MessageBienvenue visiteur="Claire" />);
  expect(screen.getByText('Bienvenue sur notre site, Claire !')).toBeInTheDocument();
});
