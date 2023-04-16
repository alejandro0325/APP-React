
import React, { Component } from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom"
//import ListarTipos from "./Components/pages/ModuloTipoEquipo/ListarTipos"
//import ListarTipos from "./Components/pages/ModuloTipoEquipo/ListarTipos"
import ListarTipos from "./Components/pages/ModuloTipoEquipo/ListarTipos"
import { Navbar } from "./Navbar"

class  ModuloTipo extends Component {

 
  render() {
    return (
      <BrowserRouter>
          <Navbar/>
          <Routes>
        
                  <Route path="/New" element={<ListarTipos/>} />
          </Routes>
      </BrowserRouter>
    )



  }
}
  export default ModuloTipo;