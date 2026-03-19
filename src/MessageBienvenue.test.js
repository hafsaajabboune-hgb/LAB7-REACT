// Français : Tests unitaires pour le composant MessageBienvenue
// English: Unit tests for the MessageBienvenue component
// Español: Pruebas unitarias para el componente MessageBienvenue
// Deutsch: Unit-Tests für die MessageBienvenue-Komponente
// Italiano: Test unitari per il componente MessageBienvenue

import { render, screen } from '@testing-library/react';
import MessageBienvenue from './MessageBienvenue';

// Français : Vérifie que le message s'affiche correctement avec le nom fourni
// English: Checks that the message displays correctly with the provided name
// Español: Verifica que el mensaje se muestre correctamente con el nombre proporcionado
// Deutsch: Überprüft, ob die Nachricht mit dem angegebenen Namen korrekt angezeigt wird
// Italiano: Verifica che il messaggio venga visualizzato correttamente con il nome fornito.....
test('affiche un message personnalisé pour le visiteur', () => {
  render(<MessageBienvenue visiteur="Claire" />);
  expect(screen.getByText('Bienvenue sur notre site, Claire !')).toBeInTheDocument();
});