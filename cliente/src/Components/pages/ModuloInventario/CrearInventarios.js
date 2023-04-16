import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';


export default class CrearInventarios extends Component {
 constructor(props) {
 super(props)


 this.onChangeSerial = this.onChangeSerial.bind(this); 
 this.onChangeModelo = this.onChangeModelo.bind(this); 
 this.onChangeDescrip = this.onChangeDescrip.bind(this);

 this.onChangeFotoEquipo = this.onChangeFotoEquipo.bind(this); 
 this.onChangeColor = this.onChangeColor.bind(this); 
 this.onChangeFechaCompra = this.onChangeFechaCompra.bind(this);

 this.onChangePrecio = this.onChangePrecio.bind(this); 
 this.onChangeUsuarioCargo = this.onChangeUsuarioCargo.bind(this); 
 this.onChangeMarca = this.onChangeMarca.bind(this);

 this.onChangeEstado = this.onChangeEstado.bind(this); 
 this.onChangeTipoEquipo = this.onChangeTipoEquipo.bind(this); 
 




 this.onSubmit = this.onSubmit.bind(this);

 this.state = {
 serial: '',
 modelo: '',
 descrip: '',
 fotoEquipo: '',
 color: '',
 fechaCompra: '',
 precio: '',
 usuarioCargo: '',
 marca: '',
 estadoEquipo: '',
 tipoEquipo: '',


 }


 }
 onChangeSerial(e) {
 this.setState({ serial: e.target.value })
 }
 onChangeModelo(e) {
    this.setState({ modelo: e.target.value })
    }

    onChangeDescrip(e) {
 this.setState({ descrip: e.target.value })
 }

 onChangeFotoEquipo(e) {
   this.setState({ fotoEquipo: e.target.value })
   }
   onChangeColor(e) {
      this.setState({ color: e.target.value })
      }
      onChangeFechaCompra(e) {
         this.setState({ fechaCompra: e.target.value })
         }
  
      onChangePrecio(e) {
   this.setState({ precio: e.target.value })
   }

  
   onChangeUsuarioCargo(e) {
         this.setState({ usuarioCargo: e.target.value })
         }
     
         onChangeMarca(e) {
      this.setState({ marca: e.target.value })
      }

      onChangeEstado(e) {
         this.setState({ estadoEquipo: e.target.value })
         }
         onChangeTipoEquipo(e) {
            this.setState({ tipoEquipo: e.target.value })
            }
        
       



 

 onSubmit(e) {
 e.preventDefault()
 const studentObject = {

 serial: this.state.serial,
 modelo: this.state.modelo,
 descrip: this.state.descrip,

 fotoEquipo: this.state.fotoEquipo,
 color: this.state.color,
 fechaCompra: this.state.fechaCompra,
 precio: this.state.precio,
 usuarioCargo: this.state.usuarioCargo,
 marca: this.state.marca,
 estadoEquipo: this.state.estadoEquipo,
 tipoEquipo: this.state.tipoEquipo,


 };
 axios.post('inventario', studentObject)
 .then(res => console.log(res.data));
 this.setState({

   serial: '',
   modelo: '',
   descrip: '',
   fotoEquipo: '',
   color: '',
   fechaCompra: '',
   precio: '',
   usuarioCargo: '',
   marca: '',
   estadoEquipo: '',
   tipoEquipo: '',

 });

}
render() {
return (<div className="form-group">
<Form onSubmit={this.onSubmit}>
 
<Form.Group controlId="Name">
<Form.Label>Numero del Serial del Equipo</Form.Label>
<Form.Control type="text" value={this.state.serial} onChange={this.onChangeSerial} />
</Form.Group>

<Form.Group controlId="text">
<Form.Label>Modelo</Form.Label>
<Form.Control type="text" value={this.state.modelo} onChange={this.onChangeModelo} />
</Form.Group>

<Form.Group controlId="text">
<Form.Label>Descripcion</Form.Label>
<Form.Control type="text" value={this.state.descrip} onChange={this.onChangeDescrip} />
</Form.Group>

<Form.Group controlId="text">
<Form.Label>Url de la Foto del Equipo</Form.Label>
<Form.Control type="text" value={this.state.fotoEquipo} onChange={this.onChangeFotoEquipo} />
</Form.Group>


<Form.Group controlId="text">
<Form.Label>Color del Equipo</Form.Label>
<Form.Control type="text" value={this.state.color} onChange={this.onChangeColor} />
</Form.Group>


<Form.Group controlId="text">
<Form.Label>Fecha de Compra</Form.Label>
<Form.Control type="text" value={this.state.fechaCompra} onChange={this.onChangeFechaCompra} />
</Form.Group>

<Form.Group controlId="text">
<Form.Label>Precio</Form.Label>
<Form.Control type="text" value={this.state.precio} onChange={this.onChangePrecio} />
</Form.Group>

<Form.Group controlId="text">
<Form.Label>Usuario a Cargo</Form.Label>
<Form.Control type="text" value={this.state.usuarioCargo} onChange={this.onChangeUsuarioCargo} />
</Form.Group>

<Form.Group controlId="text">
<Form.Label>Marca del Equipo</Form.Label>
<Form.Control type="text" value={this.state.marca} onChange={this.onChangeMarca} />
</Form.Group>

<Form.Group controlId="text">
<Form.Label>Estado del Equipo</Form.Label>
<Form.Control type="text" value={this.state.estadoEquipo} onChange={this.onChangeEstado} />
</Form.Group>

<Form.Group controlId="text">
<Form.Label>Tipo de Equipo</Form.Label>
<Form.Control type="text" value={this.state.tipoEquipo} onChange={this.onChangeTipoEquipo} />
</Form.Group>



<br></br>
<Button variant="secondary" size="lg" block="block" type="submit">
Crear Inventarios del Equipo
</Button>
</Form>
</div>);
}
}
