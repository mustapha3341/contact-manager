import "./NewContactForm.css";

const NewContactForm = () => {
  return (
    <div className="contact-form">
      <h1>Add New Contact</h1>
      <form>
        <div>
          <input type="text" placeholder="Enter first name" />
          <input type="text" placeholder="Enter last name" />
        </div>
        <input type="text" placeholder="Enter description" name="description" />
        <input
          type="text"
          placeholder="Enter email address"
          name="emailAddress"
        />
        <button className="contact-form__btn">Add</button>
      </form>
    </div>
  );
};

export default NewContactForm;
