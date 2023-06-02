import Sidebar from "./components/Sidebar/Sidebar";
import MainSection from "./components/MainSection/MainSection";

import { useState } from "react";

const App = () => {
  const [selectedContact, setSelectedContact] = useState(null);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contacts, setContacts] = useState([]);

  console.log(contacts);

  return (
    <div className="app-component">
      <Sidebar
        contacts={contacts}
        setSelectedContact={setSelectedContact}
        setShowContactForm={setShowContactForm}
      />
      <MainSection
        setContacts={setContacts}
        selectedContact={selectedContact}
        showContactForm={showContactForm}
        setSelectedContact={setSelectedContact}
        setShowContactForm={setShowContactForm}
      />
    </div>
  );
};

export default App;
