import React, { useState, useEffect } from "react";

import "./form.css";

const Form = (props) => {
  const initialValues = {
    firstname: "",
    lastname: "",
    company: "",
    email: "",
    password: "",
    confirm_password: "",
    address: "",
    city: "",
    state: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};
    const regex1 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regex2 = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,15}$/;

    if (!values.firstname) {
      errors.firstname = "*mandatory field";
    } else if (values.firstname.length > 25) {
      errors.firstname = "* character limit exceeded";
    }
    if (!values.lastname) {
      errors.lastname = "*mandatory field";
    } else if (values.lastname.length > 25) {
      errors.lastname = "* character limit exceeded";
    }
    if (!values.company) {
      errors.company = "*mandatory field";
    } else if (values.company.length > 50) {
      errors.company = "* character limit exceeded";
    }
    if (!values.email) {
      errors.email = "*mandatory field";
    } else if (!regex1.test(values.email)) {
      errors.email = "invalid email";
    }
    if (!values.password) {
      errors.password = "*mandatory field";
    } else if (!regex2.test(values.password)) {
      errors.password =
        "password must be between 6-15 character which consist atleast one number, letter,special character";
    }
    if (!values.confirm_password) {
      errors.confirm_password = "*mandatory field";
    } else if (values.confirm_password !== values.password) {
      errors.confirm_password = "*password did not match";
    }
    if (!values.address) {
      errors.address = "*mandatory field";
    } else if (values.address.length > 50) {
      errors.address = "* character limit exceeded";
    }
    if (!values.city) {
      errors.city = "*mandatory field";
    } else if (values.city.length > 50) {
      errors.city = "* character limit exceeded";
    }
    if (!values.state) {
      errors.state = "*mandatory field";
    } else if (values.state.length > 50) {
      errors.state = "* character limit exceeded";
    }
    return errors;
  };

  const handleClear = () => {
    setFormValues(initialValues);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>CONTACT FORM</h1>
        <div className="inline">
          <div className="name">
            <label htmlFor="">Firstname</label>
            <input
              type="text"
              name="firstname"
              placeholder="firstname"
              value={formValues.firstname}
              onChange={handleChange}
            />
            <p>{formErrors.firstname}</p>
          </div>
          <div className="name">
            <label htmlFor="">Lastname</label>
            <input
              type="text"
              name="lastname"
              placeholder="lastname"
              value={formValues.lastname}
              onChange={handleChange}
            />
            <p>{formErrors.lastname}</p>
          </div>
        </div>

        <div className="company">
          <label htmlFor="">Company</label>
          <input
            type="text"
            name="company"
            placeholder="company"
            value={formValues.company}
            onChange={handleChange}
          />
        </div>
        <p>{formErrors.company}</p>
        <div className="email">
          <label htmlFor="">Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="email"
            value={formValues.email}
            onChange={handleChange}
          />
        </div>
        <p>{formErrors.email}</p>
        <div className="inline">
          <div className="password">
            <label htmlFor="">Password</label>
            <input
              type="password"
              name="password"
              placeholder="password"
              value={formValues.password}
              onChange={handleChange}
            />
            <p>{formErrors.password}</p>
          </div>
          <div className="password">
            <label htmlFor="">Confirm Password</label>
            <input
              type="password"
              name="confirm_password"
              placeholder="confirm password"
              value={formValues.confirm_password}
              onChange={handleChange}
            />
            <p>{formErrors.confirm_password}</p>
          </div>
        </div>
        <div className="address">
          <label htmlFor="">Address</label>
          <input
            type="text"
            name="address"
            placeholder="address"
            value={formValues.address}
            onChange={handleChange}
          />
        </div>
        <p>{formErrors.address}</p>
        <div className="inline">
          <div>
            <label htmlFor="">City</label>
            <input
              type="text"
              name="city"
              placeholder="city"
              value={formValues.city}
              onChange={handleChange}
            />
            <p>{formErrors.city}</p>
          </div>
          <div>
            <label htmlFor="">State</label>
            <input
              type="text"
              name="state"
              placeholder="state"
              value={formValues.state}
              onChange={handleChange}
            />
            <p>{formErrors.state}</p>
          </div>
        </div>
        <div>
          <button
            onClick={
              Object.keys(formErrors).length === 0 &&
              isSubmit &&
              (() => props.valuehandler(formValues))
            }
          >
            Add
          </button>
          <button
            onClick={
              Object.keys(formErrors).length === 0 &&
              isSubmit &&
              (() => props.previewHandler(formValues))
            }
          >
            Preview
          </button>

          <a href="" onClick={handleClear}>
            Clear
          </a>
        </div>
      </form>
    </div>
  );
};

export default Form;
