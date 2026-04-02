import { useNavigate } from "react-router-dom"

export default function Navabar(){
    const navigate= useNavigate();
    return(
        <ul>
            <li onClick={()=>{navigate("/login")}}>Login</li>
            <li onClick={()=>{navigate("/register")}}>Register</li>
        </ul>
    )
}