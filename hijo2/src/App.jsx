import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./estilos.css";

const Menu = lazy(() => import('hijo1/Menu'));

const h1 = document.createElement('h1');
h1.textContent = 'hijo 2 estuvo aqui';
document.querySelector('body').prepend(h11);

const App = () => (
  <section>
    <h1>HIJO 2</h1>
    <p>Hola soy Hijo Dosssssss</p>

    <Suspense fallback="Cargando...">
      <Menu />
    </Suspense>

    <Routes>
      <Route path="/" index element={<h3>inicio</h3>} />
      <Route path="ruta1" element={<h3>ruta 1</h3>} />
      <Route path="ruta2" element={<h3>ruta 2</h3>} />
      <Route path="ruta3" element={<h3>ruta 3</h3>} />
    </Routes>
  </section>
);

export default App;