// French/English: Version surveillée du bouton / Monitored button version

import avecSurveillance from './avecSurveillance';
import BoutonAction from './BoutonAction';

// FR: Application du HOC / EN: Applying the HOC
const BoutonSurveillé = avecSurveillance(BoutonAction);

export default BoutonSurveillé;
