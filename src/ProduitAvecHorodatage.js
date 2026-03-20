// French/English: Produit avec horodatage / Product with timestamp

import avecHorodatage from './avecHorodatage';
import CarteProduit from './CarteProduit';

// FR: Application du HOC d'horodatage / EN: Applying timestamp HOC
const ProduitAvecHorodatage = avecHorodatage(CarteProduit);

export default ProduitAvecHorodatage;
