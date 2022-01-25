import React, { Component } from 'react'
import './boton.css'

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );

const numberRegex = RegExp(
    /^[0-9]*$/
    );

    const formValid = ({ formErrors }) => {
        let valid = true;
      
        // validate form errors being empty
        Object.values(formErrors).forEach(val => {
          (val.length > 0) && (valid = false);
        });
      
        // validate the form was filled out
        // Object.values(rest).forEach(val => {
        //   val === "" && (valid = false);
        // });
        // Object.values( formName).forEach(val => {
        //     (val=== "") && (valid = false);
        //   });
      
        return valid;
      };
export class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            email: "",
            number: "",
            formErrors:{
                email: "",
                number: "",
            },
       }
    }

    handleChange = (event) =>{
        event.preventDefault();
        const {name, value} = event.target;
        let formErrors = this.state.formErrors;

        switch (name){
            case 'Email':
                formErrors.email = emailRegex.test(value) ? '' : 'Correo electronico invalido';  
             break;  
            case 'Numero':
             formErrors.number =(numberRegex.test(value)&& value.length >=10) ? '': 'Ingresar 10 numeros como minimo';  
             break;  
             default: 
             break;
        }

      this.setState({formErrors, [name]: value},() => console.log(this.state))  
    }

    // handleEmailChange = (event) =>{
    //     this.setState({
    //         email: event.target.value
    //     })
    // }
    // handleNumberChange = (event) =>{
    //     this.setState({
    //         number: event.target.value
    //     })
    // }
    handleSubmit = (event)=>{
        event.preventDefault(); 
        if (formValid(this.state)&& this.email.value !=="" && this.number.value !=="" ){
        window.Email.send({
            SecureToken:"14c5e7d9-baa7-408a-8cdd-669e929b4302",
            From : `${this.email.value}`,
            To : `codanai666@gmail.com`,
            Subject : "NEWS CODANAI",
            Body : `El numero telefonico de este usuario es: ${this.number.value}.\nEl correo es: ${this.email.value}`
        }).then(
          message =>alert(message)
        );
        this.email.value="";
        this.number.value="";
        this.btn.setAttribute("disabled","disabled");
    } else {
        alert("Favor de insertar la informacion en los campos obligatorios antes de enviar los datos ")
    }     

    }


    render() {
        const {formErrors} = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
            <div>
                <input 
                type="email"
                name="Email"  
                placeholder="Escribe tu correo aquí" 
                defaultValue={this.state.email}
                onChange={this.handleChange} 
                ref={(el) => (this.email=el)}
                />
                 {formErrors.email.length > 0 && (
                    <span className="errorMessage">{formErrors.email}</span>
                )}
            </div>
            <br/>
            <input 
            type="tel"
            name="Numero"
            noValidate
            placeholder="Número de cel"
            defaultValue={this.state.number}
            onChange={this.handleChange}
            ref={(el) => (this.number=el)} 
            />
             {formErrors.number.length > 0 && (
                    <span className="errorMessage">{formErrors.number}</span>
                )}
            <br/>
            <br/>
            <button 
            className='boton'
            type="submit"
            ref={btn => { this.btn = btn; }}>Enviar Datos</button>
            </form>
        )
    }
}

export default Form
