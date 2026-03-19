// Français : Tests pour le composant FormulaireInscription
// English: Tests for the FormulaireInscription component
// Español: Pruebas para el componente FormulaireInscription
// Deutsch: Tests für die FormulaireInscription-Komponente
// Italiano: Test per il componente FormulaireInscription

import { render, screen, fireEvent } from '@testing-library/react';
import FormulaireInscription from './FormulaireInscription';

// Français : Test de validation du champ email vide
// English: Test for empty email field validation
// Español: Prueba de validación de campo de correo vacío
// Deutsch: Test der Validierung eines leeren E-Mail-Feldes
// Italiano: Test di validazione del campo email vuoto
test('affiche une erreur quand le champ email est vide', () => {
  render(<FormulaireInscription />);
  
  const bouton = screen.getByText("S'inscrire");
  fireEvent.click(bouton);
  
  expect(screen.getByText('Veuillez entrer une adresse email valide')).toBeInTheDocument();
});

// Français : Test de validation du mot de passe trop court
// English: Test for too short password validation
// Español: Prueba de validación de contraseña demasiado corta
// Deutsch: Test der Validierung eines zu kurzen Passworts
// Italiano: Test di validazione della password troppo corta
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

// Français : Test de validation de la correspondance des mots de passe
// English: Test for password matching validation
// Español: Prueba de validación de coincidencia de contraseñas
// Deutsch: Test der Validierung der Passwortübereinstimmung
// Italiano: Test di validazione della corrispondenza delle password
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

// Français : Test de réussite du formulaire avec données valides
// English: Test for successful form submission with valid data
// Español: Prueba de envío exitoso del formulario con datos válidos
// Deutsch: Test der erfolgreichen Formularübermittlung mit gültigen Daten
// Italiano: Test di invio riuscito del modulo con dati validi
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