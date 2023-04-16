import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const EstadoTabla = (props) => {
const { _id, nombre, estado } = props.obj;

const borrarEstado = () => {
	axios
	.delete(
"/estados/" + _id)
	.then((res) => {
		if (res.status === 200) {
		alert("Estado Exitosamente Borrado");
		window.location.reload();
		} else Promise.reject();
	})
	.catch((err) => alert("Algo esta mal"));
};

return (
	<tr>
	<td>{nombre}</td>
	<td>{estado}</td>
	
	<td>
		<Link className="edit-link"
		to={"/estados/" + _id}>
		Editar
		</Link>
		<br></br>
		<Button onClick={borrarEstado}
		size="sm" variant="danger">
		Borrar
		</Button>
	</td>
	</tr>
);
};

export default EstadoTabla;
