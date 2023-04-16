import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const TipoTabla = (props) => {
const { _id, nombre, estado } = props.obj;

const borrarEstado = () => {
	axios
	.delete(
"/tipos/" + _id)
	.then((res) => {
		if (res.status === 200) {
		alert("Tipo Exitosamente Borrado");
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
		to={"/tipos/" + _id}>
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

export default TipoTabla;
