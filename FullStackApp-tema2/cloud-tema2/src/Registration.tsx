import React, { useState } from "react";
import "./Registration.scss";
import axios from "axios";
import Popup from "./Popup";
import { Link } from "react-router-dom";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    phoneNumber: "",
    city: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/register",
        formData
      );

      console.log("Response from server:", response.data);

      setSuccessMessage("Registration successful");

      setIsPopupOpen(true);
      setFormData({
        email: "",
        name: "",
        password: "",
        phoneNumber: "",
        city: "",
      });
    } catch (error) {
      // Handle errors (display error messages, etc.)
      console.error("Registration error:", error);
    }
  };

  return (
    <div className="registration-container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div className="buttonW">
          <button type="submit">Register</button>
        </div>
        {successMessage && <p className="success-message">{successMessage}</p>}
        <p>
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </form>
      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
        <h2>{successMessage}</h2>
        <p>
          You have successfully registered. You can now{" "}
          <Link to="/login">log in</Link>.
        </p>
      </Popup>
    </div>
  );
};

export default RegistrationForm;
