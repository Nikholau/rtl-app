import { useState } from "react";
import Dropdown from "./components/dropdown/Dropdown";

function App() {
  const [selectedName, setSelectedName] = useState(null)
  return (
    <div className="App">
      {selectedName && <div>O nome selecionado: {selectedName}</div>}
      <Dropdown 
      title="Selecione uma opção" 
      options={['Nikholas', 'Nickolas', 'Nicholas', 'Nikolas'] }
      onSelect={setSelectedName}
      />
    </div>
  );
}

export default App;
