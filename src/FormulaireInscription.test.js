// French/English: Tests du formulaire / Form tests

import { render, screen, fireEvent } from '@testing-library/react';
import FormulaireInscription from './FormulaireInscription';

// FR: Test email vide / EN: Empty email test
test('affiche une erreur quand le champ email est vide', () => {
  render(<FormulaireInscription />);
  
  const bouton = screen.getByText("S'inscrire");
  fireEvent.click(bouton);
  
  expect(screen.getByText('Veuillez entrer une adresse email valide')).toBeInTheDocument();
});

// FR: Test mot de passe trop court / EN: Short password test
test('affiche une erreur quand le mot de passe est trop court', () => {
  render(<FormulaireInscription />);
  
  const champEmail = screen.getByLabelText('Email :');
  const champMotDePasse = screen.getByLabelText('Mot de passe :');
  
  fireEvent.change(champEmail, { target: { value: 'test@test.com' } });
  fireEvent.change(champMotDePasse, { target: { value: '123' } });
  
  const bouton = screen.getByText("S'inscrire");
  fireEvent.click(bouton);
  
  expect(screen.getByText('Le mot de passe doit contenir au moins 6 caracteres')).toBeInTheDocument();
});

// FR: Test non-correspondance / EN: Mismatch test
test('affiche une erreur quand les mots de passe ne correspondent pas', () => {
  render(<FormulaireInscription />);
  
  const champEmail = screen.getByLabelText('Email :');
  const champMotDePasse = screen.getByLabelText('Mot de passe :');
  const champConfirmation = screen.getByLabelText('Confirmer le mot de passe :');
  
  fireEvent.change(champEmail, { target: { value: 'test@test.com' } });
  fireEvent.change(champMotDePasse, { target: { value: '123456' } });
  fireEvent.change(champConfirmation, { target: { value: '654321' } });
  
  const bouton = screen.getByText("S'inscrire");
  fireEvent.click(bouton);
  
  expect(screen.getByText('Les mots de passe ne correspondent pas')).toBeInTheDocument();
});

// FR: Test succès / EN: Success test
test('affiche un message de succes quand le formulaire est valide', () => {
  render(<FormulaireInscription />);
  
  const champEmail = screen.getByLabelText('Email :');
  const champMotDePasse = screen.getByLabelText('Mot de passe :');
  const champConfirmation = screen.getByLabelText('Confirmer le mot de passe :');
  
  fireEvent.change(champEmail, { target: { value: 'test@test.com' } });
  fireEvent.change(champMotDePasse, { target: { value: '123456' } });
  fireEvent.change(champConfirmation, { target: { value: '123456' } });
  
  const bouton = screen.getByText("S'inscrire");
  fireEvent.click(bouton);
  
  expect(screen.getByText('Inscription reussie ! Bienvenue test@test.com')).toBeInTheDocument();
});
