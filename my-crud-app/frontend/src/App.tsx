import React from "react";
import RecordList from "./pages/RecordList";
import "./styles/App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Gestión de Registros</h1>
      <RecordList />
    </div>
  );
};

export default App;
