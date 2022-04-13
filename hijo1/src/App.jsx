import React from "react";
import { Routes, Route } from "react-router-dom";
import "./estilos.css";
import Menu from "./Menu.jsx";

const App = () => (
  <section>
    <h1>HIJO 1</h1>
    <p>Hola soy Hijo Uno</p>

    <Menu />

    <Routes>
      <Route path="/" index element={<h3>inicio</h3>} />
      <Route path="ruta1" element={<h3>ruta 1</h3>} />
      <Route path="ruta2" element={<h3>ruta 2</h3>} />
      <Route path="ruta3" element={<h3>ruta 3</h3>} />
    </Routes>
  </section>
);

export default App;