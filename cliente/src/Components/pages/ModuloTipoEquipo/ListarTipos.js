import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import EstadoTabla from "./TipoTabla";

const ListarTipos = () => {
    const [tipos, setTipos] = useState([])

useEffect(() => {
	axios
	.get("tipos")
	.then(({ data }) => {
		setTipos(data);
	}) 
	.catch((error) => {
		console.log(error);
	});
}, []);

const DataTable = () => {
	return tipos.map((res, i) => {
	return <EstadoTabla obj={res} key={i} />;
	});
};

return (
	<div className="table-wrapper">
	<Table striped bordered hover>
		<thead>
		<tr>
			<th>Tipo de Equipo</th>
			<th> Estado del Equipo </th>
			<th> Accion a Realizar </th>
			
		</tr>
		</thead>
		<tbody>{DataTable()}</tbody>
	</Table>
	</div>
);
};

export default ListarTipos;
