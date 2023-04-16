import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import EstadoTabla from "./UsuariosTabla";

const ListarUsuarios = () => {
    const [usuarios, setUsuarios] = useState([])

useEffect(() => {
	axios
	.get("usuarios")
	.then(({ data }) => {
		setUsuarios(data);
	}) 
	.catch((error) => {
		console.log(error);
	});
}, []);

const DataTable = () => {
	return usuarios.map((res, i) => {
	return <EstadoTabla obj={res} key={i} />;
	});
};

return (
	<div className="table-wrapper">
	<Table striped bordered hover>
		<thead>
		<tr>
			<th>Nombre de Usuario</th>
			<th> Email del Usuario </th>
			<th> Estado del Usuario</th>
			<th> Accion a Realizar </th>
			
		</tr>
		</thead>
		<tbody>{DataTable()}</tbody>
	</Table>
	</div>
);
};

export default ListarUsuarios;
