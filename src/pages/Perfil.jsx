import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../config/apiConfig";



function Perfil() {

    const [datosPerfil, setDatosPerfil] = useState('');
    const [error, setError] = useState('');

    const { token, logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const cargarPerfil = async () => {

            try {
                const response = await fetch(`${API_BASE_URL}/auth/perfil`, {
                    method: 'GET',
                    headers: {'Authorization': `Bearer ${token}`}
                });

                if (!response.ok) {
                    throw new Error("Can't charger Account, try again")
                }

                const datos = await response.json();
                setDatosPerfil(datos)

            } catch (err) {
                setError(err.message);
            };
        }
        cargarPerfil();

    }, [token]);

    const manejarLogout = async () => {

        try {
            await fetch(`${API_BASE_URL}/auth/logout`, {
                method: 'POST',
                headers: { 'Authorization': `Bearer ${token}` },
            });
        } catch (err) {
            console.log("Network error while trying to revoke the token " + err);
        } finally {
            logout();
            navigate('/login');
        }

    };


    return (
        <div>
            <h1>User Profile</h1>
            
            <div style={{ textAlign: "center", display: "flex", flexDirection: "column", gap: "0.8rem", margin: "1rem 0" }}>
                <p style={{ fontStyle: "italic", color: "#627d98" }}>Welcome to the system secured by Spring Security</p>
                <h2 style={{ fontSize: "1.4rem", color: "#102a43", margin: "0.5rem 0" }}>
                    👤 {datosPerfil ? datosPerfil.username : "Loading..."}
                </h2>
                <span style={{ display: "inline-block", alignSelf: "center", backgroundColor: "#cbd5e1", color: "#102a43", padding: "0.25rem 0.75rem", borderRadius: "20px", fontSize: "0.85rem", fontWeight: "600" }}>
                    Role: {datosPerfil ? datosPerfil.rol : "..."}
                </span>
                <p style={{ color: "#2b9348", fontWeight: "600" }}>✓ Successfully Authenticated</p>
            </div>

            <button onClick={logout} style={{ backgroundColor: "#e63946" }}>Log Out</button>
        </div>
    )

}

export default Perfil;