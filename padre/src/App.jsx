import React, { lazy, Suspense } from "react";
import moment from "moment";
import { Routes, Route, Link } from "react-router-dom";
import "./estilos.css";

const Hijo1 = lazy(() => import('hijo1/Hijo1'));
const Hijo2 = lazy(() => import('hijo2/Hijo2'));

const App = () => (
  <section>
    <h1>PADRE</h1>
    <h2>{moment().format('LLL')}</h2>

    <ul>
      <li><Link to="/">ir a inicio</Link></li>
      <li><Link to="hijo1">ir a hijo1</Link></li>
      <li><Link to="hijo2">ir a hijo2</Link></li>
    </ul>

    <Suspense fallback={<h4>Cargando...</h4>}>
      <Routes>
        <Route path="/" element={<h3>inicio</h3>} />
        <Route path="hijo1/*" element={<Hijo1 />} />
        <Route path="hijo2/*" element={<Hijo2 />} />
      </Routes>
    </Suspense>
  </section>
);

export default App;