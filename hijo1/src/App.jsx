import React from "react";
import styled, { createGlobalStyle } from 'styled-components';
import { Routes, Route } from "react-router-dom";
import moment from "moment";
import Menu from "./Menu.jsx";

const CSSReset = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* 100% height for react components */
  html, body, #root {
    height: 100%;
  }
`;

const StyledApp = styled.section`
  background-color: lightskyblue;
  height: 100%;
  font-family: 'Courier New', Courier, monospace;
  padding: 30px;
`;

const Titulo = styled.h1`
  font-size: 4em;
`;

const Subtitulo = styled.h2`
  font-size: 3em;
`;

const App = () => (
  <StyledApp>
    <CSSReset />

    <Titulo>HIJO 1</Titulo>
    <h2>{moment().format('LLL')}</h2>

    <Menu />

    <Routes>
      <Route path="/" index element={<Subtitulo>Inicio</Subtitulo>} />
      <Route path="ruta1" element={<Subtitulo>Ruta 1</Subtitulo>} />
      <Route path="ruta2" element={<Subtitulo>Ruta 2</Subtitulo>} />
      <Route path="ruta3" element={<Subtitulo>Ruta 3</Subtitulo>} />
    </Routes>
  </StyledApp>
);

export default App;