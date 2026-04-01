import { useState } from "react"
import style from "./LoginForm.module.css";
import {object,string} from "yup";
const initialData={
    username:'',
    password:''
}
const userSchema= object({
        username:string().min(2,"username is required"),
        password:string().required("password is required").min(8,"password must be atleast 8 characters")
        // .matches(/[A-Z]/,"password must contain atleast one uppercase")
        // .matches(/[a-z]/,"password must contain atleast one lowercase")
        // .matches(/[0-9]/,"password must contain atleast one number")
        // .matches(/[@$!%*?&]/,"password must contain atleast one special character")
       .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "password conatains atleast 8 characters,include one uppercase,one lowercase,one number,one special character")
})
export default function LoginForm(){
    const [formData,setFormData]=useState(initialData);
    const [formErrors,setFormErrors] = useState({})
    
    const handleChange=(e)=>{
        setFormData((prev)=>({...prev,
            [e.target.name]:e.target.value
        }))
        setFormErrors((prev)=>({...prev,
            [e.target.name]:''
        }))
    }
    const handleSubmit= async (e) => {
        e.preventDefault();
        try{
            await userSchema.validate(formData,{abortEarly:false});
            setFormData(initialData);
            setFormErrors({})
        }
        catch(error){
            const errors={}
           console.log(error);
           console.log(error.inner);
            error.inner.map((err)=>{
                errors[err.path]=err.message;
            })
            setFormErrors(errors);
            
        }
    }
    return(
        <div className={style.container}>
            <form onSubmit={handleSubmit} className={style.formcontainer}>
                <label>UserName:</label>
                <input name="username" 
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your username" />
                <span className={style.error}>{formErrors.username}</span>
                <label>Password:</label>
                <input name="password" value={formData.password} 
                onChange={handleChange} placeholder="Enter your password" />
                <span className={style.error}>{formErrors.password}</span>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}