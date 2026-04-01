import { useState } from "react"
import {object , string, number,date} from "yup";
import Style from "./RegistrationForm.module.css";
const initialData = {
    firstname:'',
    lastname:'',
    email:'',
    password:'',
    city:'',
    country:''
}
const userSchema = object({
    firstname:string().required("First name is required"),
    lastname:string().required("lastname is required"),
    email:string().email("Invalid email").required("Email is required"),
    password:string().required("password required").min(2,"minimum 2 characters expected"),
    city: string().required("city is required"),
    country: string().required("country is needed")
})
export default function RegistrationForm(){
    const [formData,setformData] = useState(initialData);
    const [formErrors,setFormErrors] = useState({});
    const handleChange=(e)=>{
        setformData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
        setFormErrors((prev)=>({
            ...prev,
            [e.target.name]:''
        }));
    }
    const handleSubmit=async (e)=>{
        e.preventDefault();
        try{
            await userSchema.validate(formData,{abortEarly:false});
            setformData(initialData);
            setFormErrors({});
        }
        catch(error){
            const errors={};
            error.inner.forEach((e)=>{
                errors[e.path]=e.message;
            });
            setFormErrors(errors);
        }
    };
    return(
        <div className={Style.container}>
            <h1>Registration Form</h1>
            <form onSubmit={handleSubmit} className={Style.formcontainer}>
                <label>FirstName:</label>
                <input name="firstname"
                value={formData.firstname}
                onChange={handleChange} 
                placeholder="Enter your name"/>
                <span className={Style.error}>{formErrors.firstname}</span>
                <label>LastName:</label>
                <input name="lastname" value={formData.lastname}
                onChange={handleChange}
                placeholder="Enter your lastname" />
                <span className={Style.error}>{formErrors.lastname}</span>
                <label>Email</label>
                <input value={formData.email} name="email"
                onChange={handleChange}
                placeholder="Enter your email" />
                <span className={Style.error}>{formErrors.email}</span>
                <label>Password</label>
                <input value={formData.password} name="password"
                onChange={handleChange}
                placeholder="Enter your password" />
                <span className={Style.error}>{formErrors.password}</span>
                <label>City</label>
                <input value={formData.city} name="city"
                onChange={handleChange}
                placeholder="Enter your city name" />
                <span className={Style.error}>{formErrors.city}</span>
                <label>Country</label>
                <input value={formData.country} 
                onChange={handleChange} name="country"
                placeholder="Enter your Country name"/>
                <span className={Style.error}>{formErrors.country}</span>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}