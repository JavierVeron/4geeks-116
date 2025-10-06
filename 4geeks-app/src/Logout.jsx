import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem("jwt-token");
        navigate("/", {replace:true});
    }, [])
}

export default Logout