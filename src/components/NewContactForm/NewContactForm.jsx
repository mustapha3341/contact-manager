/* eslint-disable react/prop-types */
import "./NewContactForm.css";
import { useState } from "react";

import Button from "../Button/Button";

const NewContactForm = (props) => {
  const setContacts = props.setContacts;
  const setShowContactForm = props.setShowContactForm;

  const [contactDetails, setContactDetails] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    description: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setContacts((prevState) => [...prevState, contactDetails]);
  };

  const handleChange = (event) => {
    const field = event.target.name;
    const inputValue = event.target.value;
    setContactDetails((previousState) => {
      return { ...previousState, [field]: inputValue };
    });
  };

  return (
    <div className="contact-form">
      <h1>Add New Contact</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            value={contactDetails.firstName}
            onChange={handleChange}
            type="text"
            placeholder="Enter first name"
            name="firstName"
          />
          <input
            value={contactDetails.lastName}
            onChange={handleChange}
            type="text"
            placeholder="Enter last name"
            name="lastName"
          />
        </div>
        <input
          value={contactDetails.description}
          onChange={handleChange}
          type="text"
          placeholder="Enter description"
          name="description"
        />
        <input
          value={contactDetails.emailAddress}
          onChange={handleChange}
          type="text"
          placeholder="Enter email address"
          name="emailAddress"
        />
        <Button type="submit">Add</Button>
        <Button
          variant="outline"
          type="button"
          onClick={() => setShowContactForm(false)}
        >
          Cancel
        </Button>
      </form>
    </div>
  );
};

export default NewContactForm;
