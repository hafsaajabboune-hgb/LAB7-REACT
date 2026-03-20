// French/English: Render Props pour liste de personnes / Render Props for people list

function ListePersonnes({ children }) {
  // FR: Données des participantes / EN: Participants data
  const personnes = ['Hafsa', 'Fatimaazzahra', 'Sara', 'Loubna'];
  
  // FR: La fonction children reçoit les données / EN: Children function receives data
  return <div style={{border: '1px solid #ccc', padding: '15px'}}>{children(personnes)}</div>;
}

export default ListePersonnes;
