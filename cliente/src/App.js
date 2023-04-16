

import { Routes, Route } from "react-router-dom";
import ListaEstado from "../src/Components/pages/ModuloEstadoEquipo/ListarEstado";
import CrearEstado from "../src/Components/pages/ModuloEstadoEquipo/CrearEstado";
import ListaMarca from "../src/Components/pages/ModuloMarcas/ListarMarca";
import CrearMarca from "../src/Components/pages/ModuloMarcas/CrearMarca";
import ListaTipo from "../src/Components/pages/ModuloTipoEquipo/ListarTipos";
import CrearTipo from "../src/Components/pages/ModuloTipoEquipo/CrearTipo";
import ListaUsuario from "../src/Components/pages/ModuloUsuarios/ListarUsuarios";
import CrearUsuario from "../src/Components/pages/ModuloUsuarios/CrearUsuarios";
import ListaInventario from "../src/Components/pages/ModuloInventario/ListarInvertario";
import Creainventario from "../src/Components/pages/ModuloInventario/CrearInventarios";



import Layout from "./Layout";


import Home from "./Home";


export default function App() {
  return (

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          
          <Route path="listar" element={<ListaEstado />} />
          <Route path="crear" element={<CrearEstado />} />

  
          <Route path="listarMarca" element={<ListaMarca />} />
          <Route path="crearMarca" element={<CrearMarca />} />

          
        
          <Route path="listarTipoEquipo" element={<ListaTipo />} />
          <Route path="crearTipoEquipo" element={<CrearTipo />} />


          <Route path="listarUsuarios" element={<ListaUsuario />} />
          <Route path="crearUsuarios" element={<CrearUsuario />} />

          <Route path="listarInventario" element={<ListaInventario />} />
          <Route path="crearInventario" element={<Creainventario />} />



        </Route>
      </Routes>
   
  );
}