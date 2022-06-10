import React, { Suspense } from 'react';
import { Outlet, Link, useLocation } from "react-router-dom";
import styled from 'styled-components';
import Catch from './Catch.jsx';

const darkBGColor = '#333';
const lightTextColor = '#FFF';
const primaryFont = 'Arial, Helvetica, sans-serif';

const Layout = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 120px auto 80px;
  grid-template-areas:
    "header"
    "content"
    "footer";
  height: 100%;
`;

const Cabecera = styled.header`
  background-color: ${darkBGColor};
  color: ${lightTextColor};
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-area: header;
`;

const Titulo = styled.h1`
  font-size: 1.5em;
`;

const Menu = styled.ul`
  display: flex;
  margin-top: 20px;
`;

const MenuItem = styled.li`
  & + & {
    margin-left: 20px;
  }
`;

const Enlace = styled(Link)`
  display: block;
  color: ${lightTextColor};
  text-transform: uppercase;
  font-family: ${primaryFont};
  text-decoration: none;
  font-size: 0.8em;
  border: 1px solid silver;
  border-radius: 4px;
  padding: 8px 20px;
  transition-duration: 200ms;
  transition-property: background-color;

  &:hover {
    background-color: #555;
    cursor: pointer;
  }
`;

const Contenido = styled.section`
  grid-area: content;
`;

const Pie = styled.footer`
  background-color: ${darkBGColor};
  color: ${lightTextColor};
  font-family: ${primaryFont};
  font-size: 0.9em;
  grid-area: footer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Dummy = styled.h1`
  font-size: 4em;
  font-family: 'Courier New', Courier, monospace;
  padding: 30px;
`;

const Pagina = () => {
  const location = useLocation();

  return (
    <Layout>
      <Cabecera>
        <Titulo>Contenedor Padre</Titulo>
  
        <nav>
          <Menu>
            <MenuItem><Enlace to="/">inicio</Enlace></MenuItem>
            <MenuItem><Enlace to="hijo1">hijo 1</Enlace></MenuItem>
            <MenuItem><Enlace to="hijo2">hijo 2</Enlace></MenuItem>
          </Menu>
        </nav>
      </Cabecera>
  
      <Contenido>
        <Catch fallback={<Dummy>En mantención vuelva más tarde...</Dummy>} key={location.pathname}>
          <Suspense fallback={<Dummy>Cargando...</Dummy>}>
            <Outlet />
          </Suspense>
        </Catch>
      </Contenido>
  
      <Pie>Footer genérico del Padre ® 2022.</Pie>
    </Layout>
  );
}


export default Pagina;
