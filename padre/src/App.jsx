import React, { lazy } from "react";
import { HashRouter, Routes, Route  } from "react-router-dom";
import styled from 'styled-components';
import Pagina from "./Pagina.jsx";
import CSSReset from './CSSReset.jsx';

const Hijo1 = lazy(() => import('hijo1/Hijo1'));
const Hijo2 = lazy(() => import('hijo2/Hijo2'));

const Dummy = styled.h1`
  font-size: 4em;
  font-family: 'Courier New', Courier, monospace;
  padding: 30px;
`;

const App = () => (
  <>
    <CSSReset />

    <HashRouter>
      <Routes>
        <Route path="/" element={<Pagina />}>
          <Route index element={<Dummy>Inicio</Dummy>} />
          <Route path="hijo1/*" element={<Hijo1 />} />
          <Route path="hijo2/*" element={<Hijo2 />} />
        </Route>
      </Routes>
    </HashRouter>
  </>
);

export default App;