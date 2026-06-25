import { useState } from 'react'
import './App.css'
import Login from "./pages/Login.jsx";
import Perfil from "./pages/Perfil.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Ruta Publica */}
          <Route path="/login" element={<Login />} />

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
