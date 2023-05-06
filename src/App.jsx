import Sidebar from "./components/Sidebar/Sidebar";
import MainSection from "./components/MainSection/MainSection";
import { contacts } from "./data/contacts.json";
import { useState } from "react";

const App = () => {
  const [selectedContact, setSelectedContact] = useState(null);
  
  return (
    <div className="app-component">
      <Sidebar contacts={contacts} setSelectedContact={setSelectedContact} />
      <MainSection selectedContact={selectedContact} />
    </div>
  );
};

export default App;
