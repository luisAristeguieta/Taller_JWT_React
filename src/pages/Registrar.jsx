import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../config/apiConfig";

function Registrar() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [rol, setRol] = useState("USER"); // "USER" por defecto

    const [error, setError] = useState(""); // Mostrar errores como en el login/perfil 
    const [exito, setExito] = useState(""); // New Mostrar exito para el registro

    const navigate = useNavigate();

    const manejarSubmit = async (e) => {
        e.preventDefault();
        
        setError("");
        setExito("");

        try {

            const response = await fetch(`${API_BASE_URL}/auth/registro`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password, rol })
            });

            if (!response.ok) {
                throw new Error("Could not register user. Username might already exist.");
            }

            setExito("User registered successfully! Redirecting to Log In...");

            setTimeout(() => {
                navigate("/login");
            }, 2000);

        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            <h1>Register New User</h1>

            <form onSubmit={manejarSubmit}>
                <div>
                    <label>Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                    />
                </div>

                <div>
                    <label>Role</label>
                    {/* Caja de selección en user o admin, teniendo a user por default (select) */}
                    <select value={rol} onChange={(e) => setRol(e.target.value)}>
                        <option value="USER">USER</option>
                        <option value="ADMIN">ADMIN</option>
                    </select>
                </div>

                <button type="submit">Register</button>
            </form>

            {/* Renderizado condicional de mensajes informativos */}
            {error && <p style={{ color: "#e63946", backgroundColor: "#ffe3e3" }}>{error}</p>}
            {exito && <p style={{ color: "#2b9348", backgroundColor: "#e8f5e9" }}>{exito}</p>}
        </div>
    );
}

export default Registrar;