import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import EstadoTabla from "./InventarioTabla";

const ListarInvertario = () => {
    const [inventario, setInventarios] = useState([])

useEffect(() => {
	axios
	.get("inventario")
	.then(({ data }) => {
		setInventarios(data);
	}) 
	.catch((error) => {
		console.log(error);
	});
}, []);

const DataTable = () => {
	return inventario.map((res, i) => {
	return <EstadoTabla obj={res} key={i} />;
	});
};






return (
	<div className="table-wrapper">
	<Table striped bordered hover>
		<thead>
		<tr>
			<th>Numero del Serial del Equipo</th>
			<th> Modelo </th>
			<th> Descripcion</th>
			<th>Url de la Foto del Equipo</th>
			<th>Color del Equipo</th>
			<th> Fecha de Compra </th>
			<th> Precio</th>
			<th>Usuario a Cargo</th>
			<th>Marca del Equipo</th>
			<th> Estado del Equipo </th>
			<th> Tipo de Equipo</th>
		
			
		</tr>
		</thead>
		<tbody>{DataTable()}</tbody>
	</Table>
	</div>
);
};

export default ListarInvertario;
