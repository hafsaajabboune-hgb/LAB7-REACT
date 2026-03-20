// French/English: Formulaire avec validation / Form with validation

import { useState } from 'react';

function FormulaireInscription() {
  // FR: États du formulaire / EN: Form states
  const [email, setEmail] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [erreurs, setErreurs] = useState({});
  const [succes, setSucces] = useState(false);

  // FR: Fonction de validation / EN: Validation function
  const validerFormulaire = () => {
    const nouvellesErreurs = {};

    // FR: Validation email / EN: Email validation
    if (!email.includes('@') || !email.includes('.')) {
      nouvellesErreurs.email = 'Veuillez entrer une adresse email valide';
    }

    // FR: Validation mot de passe / EN: Password validation
    if (motDePasse.length < 6) {
      nouvellesErreurs.motDePasse = 'Le mot de passe doit contenir au moins 6 caracteres';
    }

    // FR: Correspondance des mots de passe / EN: Password matching
    if (motDePasse !== confirmation) {
      nouvellesErreurs.confirmation = 'Les mots de passe ne correspondent pas';
    }

    setErreurs(nouvellesErreurs);

    // FR: Succès si aucune erreur / EN: Success if no errors
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
      
      {/* FR: Affichage conditionnel / EN: Conditional display */}
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
          {/* FR: Champ email / EN: Email field */}
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

          {/* FR: Champ mot de passe / EN: Password field */}
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

          {/* FR: Champ confirmation / EN: Confirmation field */}
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
