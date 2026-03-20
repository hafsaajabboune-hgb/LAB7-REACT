// French/English: Composant bouton réutilisable / Reusable button component

function BoutonAction(props) {
  // FR: Style inline / EN: Inline styles
  return <button style={{padding: '10px', margin: '5px'}}>{props.texte}</button>;
}

export default BoutonAction;
