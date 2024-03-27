import React, { useState } from "react";
import "./Registration.scss";
import axios from "axios";

const LogIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

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
        "http://localhost:3000/authenticate",
        formData
      );

      const { token } = response.data;

      localStorage.setItem("jwtToken", token);

      console.log("Registration successful:", response.data);
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <div className="registration-container">
      <h2>Login</h2>
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
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="buttonW">
          <button type="submit">Log in</button>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
