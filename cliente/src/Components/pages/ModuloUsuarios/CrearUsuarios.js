import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';


export default class CrearUsuarios extends Component {
 constructor(props) {
 super(props)


 this.onChangeNombre = this.onChangeNombre.bind(this); 
 this.onChangeEmail = this.onChangeEmail.bind(this); 
 this.onChangeEstado = this.onChangeEstado.bind(this);
 this.onSubmit = this.onSubmit.bind(this);

 this.state = {
 nombre: '',
 email: '',
 estado: '',
 }
 }
 onChangeNombre(e) {
 this.setState({ nombre: e.target.value })
 }
 onChangeEmail(e) {
    this.setState({ email: e.target.value })
    }

 onChangeEstado(e) {
 this.setState({ estado: e.target.value })
 }

 onSubmit(e) {
 e.preventDefault()
 const studentObject = {
 nombre: this.state.nombre,
 email: this.state.email,
 estado: this.state.estado,

 };
 axios.post('usuarios', studentObject)
 .then(res => console.log(res.data));
 this.setState({
 nombre: '',
 email: '',
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
<Form.Label>Email</Form.Label>
<Form.Control type="text" value={this.state.email} onChange={this.onChangeEmail} />
</Form.Group>
<Form.Group controlId="text">
<Form.Label>Estado</Form.Label>
<Form.Control type="text" value={this.state.estado} onChange={this.onChangeEstado} />
</Form.Group>
<Button variant="secondary" size="lg" block="block" type="submit">
Crear Usuarios del Equipo
</Button>
</Form>
</div>);
}
}
