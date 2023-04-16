import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const InventarioTabla = (props) => {
const {
	_id, serial, modelo,descrip,fotoEquipo,	color,	fechaCompra,precio,	usuarioCargo,marca,	estadoEquipo,tipoEquipo} = props.obj;

const borrarTabla = () => {
	axios
	.delete(
"/inventario/" + _id)
	.then((res) => {
		if (res.status === 200) {
		alert("Registro Borrado Exitosamente");
		window.location.reload();
		} else Promise.reject();
	})
	.catch((err) => alert("Algo esta mal"));
};

return (
	<tr>



	<td>{serial}</td>
			<td> {modelo} </td>
			<td> {descrip}</td>
			
			<td> <img src={fotoEquipo} alt="imagen" width="100" height="100"/></td>
			<td>{color}</td>
			<td> {fechaCompra} </td>
			<td> {precio}</td>
			<td>{usuarioCargo}</td>
			<td>{marca}</td>
			<td> {estadoEquipo} </td>
			<td> {tipoEquipo} </td>
			


			

	
	<td>
		<Link className="edit-link"
		to={"/inventario/" + _id}>
		Editar
		</Link>
		<br></br>
		<Button onClick={borrarTabla}
		size="sm" variant="danger">
		Borrar
		</Button>
	</td>
	</tr>
);
};

export default InventarioTabla;
