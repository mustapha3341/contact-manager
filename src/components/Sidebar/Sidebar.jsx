/* eslint-disable react/prop-types */
import "./Sidebar.css";

const Sidebar = (props) => {
  const contacts = props.contacts;
  const setSelectedContact = props.setSelectedContact;

  return (
    <div className="sidebar">
      <h4 className="sidebar-heading">My Contacts</h4>
      <div className="sidebar-list">
        {contacts.map((contact, index) => {
          return (
            <p
              onClick={() => {
                setSelectedContact(contact);
              }}
              className="sidebar-list__item"
              key={index + contact.first_name}
            >
              <span>{contact.first_name}</span>
              <span>{contact.last_name}</span>
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
