/* eslint-disable react/prop-types */
import "./NewContactForm.css";
import { useState } from "react";
import { useForm } from "react-hook-form";

import Button from "../Button/Button";
import InputField from "../InputField/InputField";

const NewContactForm = (props) => {
  const setContacts = props.setContacts;
  const setShowContactForm = props.setShowContactForm;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      emailAddress: "",
      description: "",
    },
  });

  const onValid = (data) => {
    setContacts((prevContacts) => [...prevContacts, data]);
  };

  const onInValid = (error) => {
    // console.log(error);
  };

  return (
    <div className="contact-form">
      <h1>Add New Contact</h1>
      <form onSubmit={handleSubmit(onValid, onInValid)}>
        <div>
          <input
            type="text"
            placeholder="Enter first name"
            {...register("firstName", {
              required: { value: true, message: "first name is required" },
            })}
          />
          {errors.firstName && (
            <p style={{ color: "red" }}>{errors.firstName.message}</p>
          )}

          <input
            type="text"
            placeholder="Enter last name"
            {...register("lastName", {
              value: true,
              message: "last name is required",
            })}
          />
          {errors.lastName && (
            <p style={{ color: "red" }}>{errors.lastName.message}</p>
          )}
        </div>
        <input
          type="text"
          placeholder="Enter description"
          {...register("description", {
            required: { value: false },
            minLength: {
              value: 50,
              message: "Description can not be less than 50 characters",
            },
            maxLength: {
              value: 200,
              message: `Description must be less than 200 characters`,
            },
          })}
        />
        {errors.description && (
          <p style={{ color: "red" }}>{errors.description.message}</p>
        )}

        <input
          type="email"
          placeholder="Enter email address"
          {...register("emailAddress", {
            required: true,
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "Invalid email address",
            },
          })}
        />
        {errors.emailAddress && (
          <p style={{ color: "red" }}>{errors.emailAddress.message}</p>
        )}

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
