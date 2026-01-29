import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const VALID_USER = "admin";
    const VALID_PASS = "claveadmin";

    const handleSubmit = (e) => {
        e.preventDefault();

        if (user === VALID_USER && password === VALID_PASS) {
  localStorage.setItem("adminAuth", "true");
  setError("");
  navigate("dashboard");

 // ruta después de login
        } else {
            setError("Usuario o clave incorrectos");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-pink-50 px-4">
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-lg rounded-xl p-8 w-full max-w-sm"
            >
                <h1 className="text-2xl font-bold text-center text-pink-600 mb-6">
                    Login Admin 🌹
                </h1>

                {/* Usuario */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">
                        Usuario
                    </label>
                    <input
                        type="text"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        placeholder="Ingresa usuario"
                    />
                </div>

                {/* Clave */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">
                        Clave
                    </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        placeholder="Ingresa contraseña"
                    />
                </div>

                {/* Error */}
                {error && (
                    <p className="text-red-500 text-sm mb-3">
                        {error}
                    </p>
                )}

                {/* Botón */}
                <button
                    type="submit"
                    className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-lg transition"
                >
                    Entrar
                </button>
            </form>
        </div>
    );
};

export default Login;
