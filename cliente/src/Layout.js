import { Outlet, NavLink } from "react-router-dom";



const Layout = () => {
  return (
    <>
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">  

             
       

          <div className="navbar-collapse">
                <div className="navbar-nav">

                <NavLink 
                        className="nav-item nav-link" 
                        to="/listar">
                       Modulo Estado Equipo Editar-Borrar
                    </NavLink>
                    <NavLink 
                        className="nav-item nav-link" 
                        to="/Crear">
                      Modulo Estado Crear
                    </NavLink>
                   
                    <NavLink 
                        className="nav-item nav-link" 
                        to="/ListarMarca">
                     Modulo Marca Equipo Editar-Borrar
                    </NavLink>
                    <NavLink 
                        className="nav-item nav-link" 
                        to="/crearMarca">
                   Modulo Marca Crear
                    </NavLink>
                    <NavLink 
                        className="nav-item nav-link" 
                        to="/listarTipoEquipo">
                  Modulo Tipo Equipo Editar-Borrar
                    </NavLink>
                    <NavLink 
                        className="nav-item nav-link" 
                        to="/crearTipoEquipo">
                 Modulo Tipo Equipo Crear
                    </NavLink>
      
                    <NavLink 
                        className="nav-item nav-link" 
                        to="/listarUsuarios">
                Modulo Usuario Editar-Borrar
                    </NavLink>
          
                    <NavLink 
                        className="nav-item nav-link" 
                        to="/crearUsuarios">
                Modulo Usuario Crear
                    </NavLink>

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/listarInventario">
             Modulo Inventario Editar-Borrar
                    </NavLink>
        
                    <NavLink 
                        className="nav-item nav-link" 
                        to="/crearInventario">
            Modulo Inventario Crear
                    </NavLink>
        
                

          </div>
          </div>
           <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                </ul>
       
        </div>
      </nav>
      <Outlet />
    </>
     
 
  )
};

export default Layout;