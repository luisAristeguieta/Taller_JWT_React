import { useState } from 'react'
import './App.css'
import Login from "./pages/Login.jsx";
import Perfil from "./pages/Perfil.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Registrar from "./pages/Registrar.jsx";

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Ruta Publica */}
          <Route path="/login" element={<Login />} />
          <Route path="/registrar" element={<Registrar />} />

          {/* Rutas Protegidas / Privadas */}
          <Route element={<ProtectedRoute />}>
            <Route path="/perfil" element={<Perfil />} />
          </Route>

          {/* Redirección por defecto */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
