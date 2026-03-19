// Français : Version avec horodatage du composant CarteProduit
// English: Version with timestamp of the CarteProduit component
// Español: Versión con marca de tiempo del componente CarteProduit
// Deutsch: Version mit Zeitstempel der CarteProduit-Komponente
// Italiano: Versione con timestamp del componente CarteProduit

import avecHorodatage from './avecHorodatage';
import CarteProduit from './CarteProduit';

// Français : Application du HOC avecHorodatage au composant CarteProduit
// English: Application of the avecHorodatage HOC to the CarteProduit component
// Español: Aplicación del HOC avecHorodatage al componente CarteProduit
// Deutsch: Anwendung des avecHorodatage HOC auf die CarteProduit-Komponente
// Italiano: Applicazione dell'HOC avecHorodatage al componente CarteProduit
const ProduitAvecHorodatage = avecHorodatage(CarteProduit);

export default ProduitAvecHorodatage;