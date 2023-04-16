import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import MarcaTabla from "./MarcaTabla";

const ListarMarca = () => {
    const [marcas, setEstados] = useState([])

useEffect(() => {
	axios
	.get("marcas")
	.then(({ data }) => {
		setEstados(data);
	}) 
	.catch((error) => {
		console.log(error);
	});
}, []);

const DataTable = () => {
	return marcas.map((res, i) => {
	return <MarcaTabla obj={res} key={i} />;
	});
};

return (
	<div className="table-wrapper">
	<Table striped bordered hover>
		<thead>
		<tr>
			<th>Marca del Equipo</th>
			<th> Estado del Equipo </th>
			<th> Accion a Realizar </th>
			
		</tr>
		</thead>
		<tbody>{DataTable()}</tbody>
	</Table>
	</div>
);
};

export default ListarMarca;
