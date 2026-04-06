import { useNavigate } from "react-router-dom"

export default function PageNotFound(){
    const navigate = useNavigate();
    return(
        <>
            <h1>Soory page is not found </h1>
            <p style={{color:"blue", cursor:"pointer"}}  onClick={()=>{navigate("/")}}>Redirect to Home page(click here)</p>
        </>
    )
}