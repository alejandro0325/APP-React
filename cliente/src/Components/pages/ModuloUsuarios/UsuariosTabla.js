import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const TipoTabla = (props) => {
const { _id, nombre, email, estado } = props.obj;

const borrarUsuario = () => {
	axios
	.delete(
"/usuarios/" + _id)
	.then((res) => {
		if (res.status === 200) {
		alert("Usuario Exitosamente Borrado");
		window.location.reload();
		} else Promise.reject();
	})
	.catch((err) => alert("Algo esta mal"));
};

return (
	<tr>
	<td>{nombre}</td>
	<td>{email}</td>
	
	<td>{estado}</td>
	
	<td>
		<Link className="edit-link"
		to={"/usuarios/" + _id}>
		Editar
		</Link>
		<br></br>
		<Button onClick={borrarUsuario}
		size="sm" variant="danger">
		Borrar
		</Button>
	</td>
	</tr>
);
};

export default TipoTabla;
