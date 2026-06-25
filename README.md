# Taller de Autenticación con JWT (React y Spring Boot) 🚀

Este proyecto representa la segunda fase del taller de seguridad basado en tokens. El objetivo principal consistió en expandir la aplicación existente en React para incorporar la funcionalidad de registro de nuevos usuarios en el sistema. Los datos capturados se envían de forma segura hacia el backend desarrollado en Spring Boot, donde son procesados y almacenados en la base de datos de PostgreSQL.

---

## 🎨 Características de Diseño y Funcionalidad

- **Interfaz con Estilo Moderno:** Se implementó un diseño limpio utilizando una paleta de tonos azules suaves y un fondo abstracto que resalta visualmente las tarjetas de inicio de sesión y registro.
- **Adaptabilidad Completa (Responsive):** Mediante el uso de CSS Flexbox, los formularios se adaptan automáticamente a diferentes resoluciones, garantizando una visualización óptima tanto en monitores de escritorio como en dispositivos móviles.
- **Enrutamiento y Acceso Público:** Con la integración de `react-router-dom`, se configuraron accesos directos y públicos para las rutas `/login` y `/registro`, manteniendo la vista de `/perfil` protegida bajo validación de token.
- **Mensajes de Retroalimentación:** Al completarse un registro de forma exitosa, el sistema despliega un aviso verde y redirige automáticamente al usuario hacia el login tras un lapso de 2 segundos. En caso de que el nombre de usuario ya exista, se captura la excepción del backend y se muestra el error en un cuadro rojo.

---

## 📁 Estructura del Proyecto

```text
taller-Jwt2/
├── entregables/         <-- 📸 Capturas de evidencia (Pantalla móvil y pestaña Network)
├── src/
│   ├── config/
│   │   └── apiConfig.js <-- Configuración de la URL base del backend en Java
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── components/
│   │   └── ProtectedRoute.jsx
│   ├── pages/
│   │   ├── Login.jsx     <-- Pantalla de acceso modificada con el enlace de registro
│   │   ├── Perfil.jsx    <-- Vista protegida que consume los datos del usuario autenticado
│   │   └── Registrar.jsx <-- [NUEVA PÁGINA] Formulario conectado al endpoint /auth/registro
│   ├── App.jsx           <-- Enrutador principal de la aplicación
│   ├── index.css         <-- Estilos globales, responsive y tema visual azul
│   └── main.jsx
└── package.json

🛠️ Tecnologías Utilizadas:

Frontend: React 18, Vite como entorno de desarrollo, React Router DOM para la navegación interna y CSS puro para el maquetado.

Backend: Servidor externo en Java utilizando Spring Boot y Spring Security para la gestión de autenticación stateless con JWT.

Base de Datos: PostgreSQL.