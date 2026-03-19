// Français : Version surveillée du composant BoutonAction
// English: Monitored version of the BoutonAction component
// Español: Versión monitoreada del componente BoutonAction
// Deutsch: Überwachte Version der BoutonAction-Komponente
// Italiano: Versione monitorata del componente BoutonAction

import avecSurveillance from './avecSurveillance';
import BoutonAction from './BoutonAction';

// Français : Application du HOC pour créer une version enrichie
// English: Applying the HOC to create an enhanced version
// Español: Aplicación del HOC para crear una versión enriquecida
// Deutsch: Anwendung des HOC zur Erstellung einer erweiterten Version
// Italiano: Applicazione dell'HOC per creare una versione arricchita
const BoutonSurveillé = avecSurveillance(BoutonAction);

export default BoutonSurveillé;