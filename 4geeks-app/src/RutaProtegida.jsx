import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const RutaProtegida = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('jwt-token');        

        if (token) {
            (async () => {
                const resp = await fetch(`http://127.0.0.1:5000/protected`, { 
                    method: 'GET',
                    headers: { 
                        "Content-Type": "application/json",
                        'Authorization': 'Bearer ' + token // ⬅⬅⬅ authorization token
                    }
                })

                if (!resp.ok) {
                    navigate("/login", {replace:true});
                }
            })();
        } else {
            navigate("/login", {replace:true});
        }
    }, [])

    return (
        <>
            <Outlet />
        </>
    )
}

export default RutaProtegida