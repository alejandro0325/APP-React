import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';


export default class CrearTipo extends Component {
 constructor(props) {
 super(props)


 this.onChangeNombre = this.onChangeNombre.bind(this); 
 this.onChangeEstado = this.onChangeEstado.bind(this);
 this.onSubmit = this.onSubmit.bind(this);

 this.state = {
 nombre: '',
 estado: '',
 }
 }
 onChangeNombre(e) {
 this.setState({ nombre: e.target.value })
 }
 onChangeEstado(e) {
 this.setState({ estado: e.target.value })
 }

 onSubmit(e) {
 e.preventDefault()
 const studentObject = {
 nombre: this.state.nombre,
 estado: this.state.estado,

 };
 axios.post('tipos', studentObject)
 .then(res => console.log(res.data));
 this.setState({
 nombre: '',
 estado: '',
 });

}
render() {
return (<div className="form-group">
<Form onSubmit={this.onSubmit}>
<Form.Group controlId="Name">
<Form.Label>Nombre</Form.Label>
<Form.Control type="text" value={this.state.nombre} onChange={this.onChangeNombre} />
</Form.Group>
<Form.Group controlId="text">
<Form.Label>Estado</Form.Label>
<Form.Control type="text" value={this.state.estado} onChange={this.onChangeEstado} />
</Form.Group>
<Button variant="secondary" size="lg" block="block" type="submit">
Crear Tipo del Equipo
</Button>
</Form>
</div>);
}
}
