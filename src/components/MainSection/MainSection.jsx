/* eslint-disable react/prop-types */
import { Fragment } from "react";
import "./MainSection.css";

const MainSection = (props) => {
  const selectedContact = props.selectedContact;

  return (
    <div className="main-section">
      <button className="main-section__button">Add New Contact</button>
      <div className="main-section__content">
        {selectedContact !== null ? (
          <Fragment>
            <div className="contact-image"></div>
            <div className="contact-details">
              <h2>
                {selectedContact.first_name} {selectedContact.last_name}
              </h2>
              <span>{selectedContact.description}</span>
              <span>{selectedContact.phone_number}</span>
              <span>{selectedContact.email_address}</span>
            </div>
          </Fragment>
        ) : (
          <div>
            <h1>Please Select a Contact</h1>
          </div>
        )}
      </div>
    </div>
  );
};
export default MainSection;
