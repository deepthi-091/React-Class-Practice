import { useState } from "react";
import styles from "./RegisterForm.module.css";

const initialData = {
  firstname: "",
  lastname: "",
  email: "",
  city: "",
  country: ""
};

const initialErrors = {
  firstname: "",
  lastname: "",
  email: "",
  city: "",
  country: ""
};

export default function RegisterForm() {
  const [formData, setFormData] = useState(initialData);
  const [formErrors, setFormErrors] = useState(initialErrors);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
    setFormErrors((prev) => ({
      ...prev,
      [e.target.name]: ""
    }));
  };

  const handleSubmit = () => {
    let errors = {};

    if (formData.firstname.trim().length === 0) {
      errors.firstname = "First name is required";
    }

    if (formData.lastname.trim().length === 0) {
      errors.lastname = "Last name is required";
    }

    if (formData.email.trim().length === 0) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email format";
    }

    if (formData.city.trim().length === 0) {
      errors.city = "City is required";
    }

    if (formData.country.trim().length === 0) {
      errors.country = "Country is required";
    }

    setFormErrors(errors);

    // Only reset if no errors
    if (Object.keys(errors).length === 0) {
      setFormData(initialData);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.Form}>
        <h1>Registration Form</h1>

        <label>First Name</label>
        <input
          value={formData.firstname}
          onChange={handleChange}
          name="firstname"
        />
        <span className={styles.error}>{formErrors.firstname}</span>

        <label>Last Name</label>
        <input
          value={formData.lastname}
          onChange={handleChange}
          name="lastname"
        />
        <span className={styles.error}>{formErrors.lastname}</span>

        <label>Email</label>
        <input
          value={formData.email}
          onChange={handleChange}
          name="email"
        />
        <span className={styles.error}>{formErrors.email}</span>

        <label>City</label>
        <input
          value={formData.city}
          onChange={handleChange}
          name="city"
        />
        <span className={styles.error}>{formErrors.city}</span>

        <label>Country</label>
        <input
          value={formData.country}
          onChange={handleChange}
          name="country"
        />
        <span className={styles.error}>{formErrors.country}</span>

        <button onClick={handleSubmit}>Register</button>
      </div>
    </div>
  );
}
