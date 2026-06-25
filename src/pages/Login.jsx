import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { API_BASE_URL } from "../config/apiConfig";
import { useAuth } from "../context/AuthContext.jsx";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState("");

    const navigate = useNavigate();
    const { login } = useAuth();

    const manejarSubmit = async (e) => {
        e.preventDefault();
        setErr('');

        try {
            const response = await fetch(`${API_BASE_URL}/auth/login`, {
                method: 'POST', 
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                throw new Error("User or password is incorrect");
            }

            const datos = await response.json();
            login(datos.token); // Guardamos el token en Context + LocalStorage
            navigate('/perfil'); // Redirección

        } catch (error) {
            setErr(error.message);
        }
    };

    return (
        <div>
            <h1>Log in</h1>
            <form onSubmit={manejarSubmit}>
                <div>
                    <label>User</label>
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
                        type="password" /* Cambiado por seguridad visual */
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {err && <p style={{ color: 'red' }}>{err}</p>}

                <button type="submit">Log In</button>
            </form>
            <div>
                <p>Don't have an account? <Link to="/registrar">Register here</Link></p>
            </div>

        </div>
    );
}

export default Login;