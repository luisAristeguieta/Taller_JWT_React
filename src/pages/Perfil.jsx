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
            <div>
                <h2>User Profile</h2>
                <button onClick={manejarLogout}>Log Out</button>
            </div>

            {error && <p>{error}</p>} {/* Renderizado condicional*/}

            {datosPerfil && (
                <div>
                    <p>{datosPerfil.Mensaje}</p>
                    <p>{datosPerfil.Usuario}</p>
                    <p>{datosPerfil.rol_detectado}</p>
                    <p>{datosPerfil.status}</p>
                </div>
            )}

        </div>
    )

}

export default Perfil;