// Français : Composant de formulaire avec validation
// English: Form component with validation
// Español: Componente de formulario con validación
// Deutsch: Formularkomponente mit Validierung
// Italiano: Componente modulo con validazione

import { useState } from 'react';

function FormulaireInscription() {
  // Français : États pour les champs du formulaire
  // English: States for form fields
  // Español: Estados para los campos del formulario
  // Deutsch: Zustände für Formularfelder
  // Italiano: Stati per i campi del modulo
  const [email, setEmail] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [erreurs, setErreurs] = useState({});
  const [succes, setSucces] = useState(false);

  // Français : Fonction de validation du formulaire
  // English: Form validation function
  // Español: Función de validación del formulario
  // Deutsch: Formularvalidierungsfunktion
  // Italiano: Funzione di validazione del modulo
  const validerFormulaire = () => {
    const nouvellesErreurs = {};

    // Français : Validation de l'email
    // English: Email validation
    // Español: Validación de correo electrónico
    // Deutsch: E-Mail-Validierung
    // Italiano: Validazione email
    if (!email.includes('@') || !email.includes('.')) {
      nouvellesErreurs.email = 'Veuillez entrer une adresse email valide';
    }

    // Français : Validation de la longueur du mot de passe
    // English: Password length validation
    // Español: Validación de longitud de contraseña
    // Deutsch: Validierung der Passwortlänge
    // Italiano: Validazione lunghezza password
    if (motDePasse.length < 6) {
      nouvellesErreurs.motDePasse = 'Le mot de passe doit contenir au moins 6 caracteres';
    }

    // Français : Validation de la correspondance des mots de passe
    // English: Password matching validation
    // Español: Validación de coincidencia de contraseñas
    // Deutsch: Validierung der Passwortübereinstimmung
    // Italiano: Validazione corrispondenza password
    if (motDePasse !== confirmation) {
      nouvellesErreurs.confirmation = 'Les mots de passe ne correspondent pas';
    }

    setErreurs(nouvellesErreurs);

    // Français : Si aucune erreur, inscription réussie
    // English: If no errors, registration successful
    // Español: Si no hay errores, registro exitoso
    // Deutsch: Wenn keine Fehler, Registrierung erfolgreich
    // Italiano: Se nessun errore, registrazione riuscita
    if (Object.keys(nouvellesErreurs).length === 0) {
      setSucces(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validerFormulaire();
  };

  return (
    <div style={{
      border: '2px solid #9c27b0',
      borderRadius: '8px',
      padding: '20px',
      maxWidth: '400px',
      margin: '20px 0'
    }}>
      <h3>Formulaire d'inscription</h3>
      
      {/* Français: Affichage conditionnel du message de succès ou du formulaire */}
      {/* English: Conditional display of success message or form */}
      {/* Español: Visualización condicional del mensaje de éxito o del formulario */}
      {/* Deutsch: Bedingte Anzeige der Erfolgsmeldung oder des Formulars */}
      {/* Italiano: Visualizzazione condizionale del messaggio di successo o del modulo */}
      {succes ? (
        <div style={{
          backgroundColor: '#4caf50',
          color: 'white',
          padding: '15px',
          borderRadius: '4px'
        }}>
          Inscription reussie ! Bienvenue {email}
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {/* Français: Champ email avec affichage d'erreur conditionnel */}
          {/* English: Email field with conditional error display */}
          {/* Español: Campo de correo con visualización condicional de error */}
          {/* Deutsch: E-Mail-Feld mit bedingter Fehleranzeige */}
          {/* Italiano: Campo email con visualizzazione condizionale dell'errore */}
          <div style={{marginBottom: '15px'}}>
            <label htmlFor="email" style={{display: 'block', marginBottom: '5px'}}>
              Email :
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: '4px',
                border: '1px solid ' + (erreurs.email ? 'red' : '#ccc')
              }}
            />
            {erreurs.email && (
              <p style={{color: 'red', fontSize: '14px', margin: '5px 0 0 0'}}>
                {erreurs.email}
              </p>
            )}
          </div>

          {/* Français: Champ mot de passe */}
          <div style={{marginBottom: '15px'}}>
            <label htmlFor="motDePasse" style={{display: 'block', marginBottom: '5px'}}>
              Mot de passe :
            </label>
            <input
              type="password"
              id="motDePasse"
              value={motDePasse}
              onChange={(e) => setMotDePasse(e.target.value)}
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: '4px',
                border: '1px solid ' + (erreurs.motDePasse ? 'red' : '#ccc')
              }}
            />
            {erreurs.motDePasse && (
              <p style={{color: 'red', fontSize: '14px', margin: '5px 0 0 0'}}>
                {erreurs.motDePasse}
              </p>
            )}
          </div>

          {/* Français: Champ confirmation */}
          <div style={{marginBottom: '15px'}}>
            <label htmlFor="confirmation" style={{display: 'block', marginBottom: '5px'}}>
              Confirmer le mot de passe :
            </label>
            <input
              type="password"
              id="confirmation"
              value={confirmation}
              onChange={(e) => setConfirmation(e.target.value)}
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: '4px',
                border: '1px solid ' + (erreurs.confirmation ? 'red' : '#ccc')
              }}
            />
            {erreurs.confirmation && (
              <p style={{color: 'red', fontSize: '14px', margin: '5px 0 0 0'}}>
                {erreurs.confirmation}
              </p>
            )}
          </div>

          <button
            type="submit"
            style={{
              backgroundColor: '#9c27b0',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              width: '100%'
            }}
          >
            S'inscrire
          </button>
        </form>
      )}
    </div>
  );
}

export default FormulaireInscription;