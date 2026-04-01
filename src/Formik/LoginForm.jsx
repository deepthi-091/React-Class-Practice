import {object,string} from "yup";
import { Formik, Form, Field ,ErrorMessage } from "formik";
const Loginschema=object({
    email:email("invalid email").required("email is required"),
    password:required("password is required").min(8,"must be 8 characters"),
});
const Basic=()=>(
    <div>
        <h1>Login Form</h1>
        <Formik initialValues={{email:"",password:""}}
        validationschema={{Loginschema}}
        onSubmit={(values,{setSubmitting})=>{
            setTimeout(()=>{
                alert(JSON.stringify(values) ,null,2);
                setSubmitting(false);
            },400);
        }}>
            {({isSubmitting}) => (
                <Form>
                    <div>
                        <label>Email:</label>
                        <Field type="email" name="email"/>
                        <ErrorMessage name="email" component="div"></ErrorMessage>
                        <label>Password:</label>
                        <Field type="password" name="Password"/>
                        <ErrorMessage name="Password" component="div"></ErrorMessage>
                        <button type="submit">Submit</button>
                    </div>
                </Form>
            )}
        </Formik>
    </div>
)
