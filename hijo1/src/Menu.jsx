import React from "react";
import { Link } from "react-router-dom";

const Menu = () => (
  <ul>
    <li><Link to="">ir a inicio</Link></li>
    <li><Link to="ruta1">ir a ruta 1</Link></li>
    <li><Link to="ruta2">ir a ruta 2</Link></li>
    <li><Link to="/ruta3">ir a ruta 3</Link></li>
    <li><Link to="/hijo1/ruta2">ir a hijo 1</Link></li>
  </ul>
);

export default Menu;