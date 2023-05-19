import "./NewContactForm.css";
import { useState } from "react";

const NewContactForm = () => {
  const [contactDetails, setContactDetails] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    description: "",
  });

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setContactDetails({ [name]: value });
  };

  return (
    <div className="contact-form">
      <h1>Add New Contact</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const { elements } = event.target;
          const firstName = elements.firstName.value;
          const lastName = elements.lastName.value;
          const description = elements.description.value;
          const emailAddress = elements.emailAddress.value;

          console.log({ firstName, lastName, description, emailAddress });
        }}
      >
        <div>
          <input
            onChange={handleChange}
            type="text"
            placeholder="Enter first name"
            value={contactDetails.firstName}
            name="firstName"
          />
          <input
            type="text"
            onChange={handleChange}
            placeholder="Enter last name"
            name="lastName"
            value={contactDetails.lastName}
          />
        </div>
        <input
          type="text"
          placeholder="Enter description"
          onChange={handleChange}
          name="description"
          value={contactDetails.description}
        />
        <input
          type="text"
          placeholder="Enter email address"
          onChange={handleChange}
          name="emailAddress"
          value={contactDetails.emailAddress}
        />
        <button className="contact-form__btn">Add</button>
      </form>
    </div>
  );
};

export default NewContactForm;
