import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const MarcaTabla = (props) => {
const { _id, nombre, estado } = props.obj;

const borrarEstado = () => {
	axios
	.delete(
"/marcas/" + _id)
	.then((res) => {
		if (res.status === 200) {
		alert("Marca Exitosamente Borrado");
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
		to={"/marcas/" + _id}>
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

export default MarcaTabla;
