import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Enlace = styled(Link)`
  &:hover {
    font-weight: bold;
  }
`;

const Item = styled.li`
  text-transform: uppercase;
`;

const Lista = styled.ul`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
`;

const Menu = () => (
  <Lista>
    <Item><Enlace to="">ir a inicio</Enlace></Item>
    <Item><Enlace to="ruta1">ir a ruta 1</Enlace></Item>
    <Item><Enlace to="ruta2">ir a ruta 2</Enlace></Item>
    <Item><Enlace to="ruta3">ir a ruta 3</Enlace></Item>
    <Item><Enlace to="/hijo1/ruta2">ir a hijo 1 ruta 2</Enlace></Item>
  </Lista>
);

export default Menu;