import { useState } from "react"
import { useFormik } from "formik";
import { object, string, ref } from "yup"
import { useNavigate, useNavigation } from "react-router-dom";
export default function Register() {
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();
    const validationSchema = object({
        name: string().required("name is required"),
        email: string(). email().required("email is required"),
        password: string().required("password required"),
        confirmpassword: string().required("required").oneOf([ref("password")], "passwords must be match"),
    });
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmpassword: ''
        },
        validationSchema,
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            setSubmitted(true);
            resetForm();
            navigate("/login")
        }
    })
    return (
        <div>
                 <form onSubmit={formik.handleSubmit}>
            <label>name</label>
            <input name="name" value={formik.values.name}
                onChange={formik.handleChange} />
            {formik.touched.name && formik.errors.name && (<p style={{ color: "red" }}>{formik.errors.name}</p>)}
            <label>Email</label>
            <input
                type="text"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
                <p style={{ color: "red" }}>{formik.errors.email}</p>
            )}
            

 <label>Password</label>
        <input
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password && (
          <p style={{ color: "red" }}>{formik.errors.password}</p>
        )}

        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmpassword"
          value={formik.values.confirmpassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.confirmpassword && formik.errors.confirmpassword && (
          <p style={{ color: "red" }}>{formik.errors.confirmpassword}</p>
        )}

        <button type="submit">Register</button>

        </form>
        {submitted && (
        <h3 style={{ color: "green", marginTop: 20 }}>
          Registration successful
        </h3>
      )}
        </div>


    )
      
}