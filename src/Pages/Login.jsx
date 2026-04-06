import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [submitted, setSubmitted] = useState(false);
  const navigate=useNavigate();

  // ✅ Validation schema
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email")
      .required("Email is required"),

    password: Yup.string()
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      setSubmitted(true);
      resetForm();
      navigate("/");
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <label>Email:</label>
        <input
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <br />
        {formik.touched.email && formik.errors.email && (
          <p style={{ color: "red" }}>{formik.errors.email}</p>
        )}

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <br />
        {formik.touched.password && formik.errors.password && (
          <p style={{ color: "red" }}>{formik.errors.password}</p>
        )}

        <button type="submit">Login</button>
      </form>

      {submitted && (
        <h3 style={{ color: "green", marginTop: 20 }}>
          Login successful
        </h3>
      )}
    </>
  );
}