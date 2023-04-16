import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import EstadoTabla from "./EstadoTabla";

const ListarEstado = () => {
    const [estados, setEstados] = useState([])

useEffect(() => {
	axios
	.get("estados")
	.then(({ data }) => {
		setEstados(data);
	}) 
	.catch((error) => {
		console.log(error);
	});
}, []);

const DataTable = () => {
	return estados.map((res, i) => {
	return <EstadoTabla obj={res} key={i} />;
	});
};

return (
	<div className="table-wrapper">
	<Table striped bordered hover>
		<thead>
		<tr>
			<th>Nombre del Equipo</th>
			<th> Estado del Equipo </th>
			<th> Accion a Realizar </th>
			
		</tr>
		</thead>
		<tbody>{DataTable()}</tbody>
	</Table>
	</div>
);
};

export default ListarEstado;
