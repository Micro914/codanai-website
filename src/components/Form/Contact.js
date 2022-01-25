import React, { Component } from 'react'
import './contact.css'
import Select, {components} from 'react-select'

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );

const numberRegex = RegExp(
    /^[0-9]*$/
    );

const nameRegex = RegExp(
    /^[^\s<>][a-zA-Z\s]+[^\s]$/
    );
    const customStyles = {
        option: (provided, state) => ({
          ...provided,
          borderBottom: '1px dotted black',
          color: 'black',
        //   backgroundColor: '#fff',
          padding: 20,
        })}

    const SingleValue = ({ children, ...props }) => (
        <components.SingleValue {...props}>
          {children}
        </components.SingleValue>
      );

     

      const techCompanies = [
        { label: "Pagina Web", value: 1 },
        { label: "Aplicación", value: 2 },
        { label: "Software a la medida", value: 3 },
        { label: "Otro (Dejalo en los comentarios)", value: 4 },
      ];


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

export class Contact extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             email: "",
             number: "",
             name: "",
             comment: "",
             formErrors:{
                 email: "",
                 number: "",
                 name: "",
                 comment: ""
             },
             selectedOption: null,
        }
    }
    handleChange = (event) =>{
        event.preventDefault();
        const {name, value} = event.target;
        let formErrors = this.state.formErrors;

        switch (name){
            case 'Nombre':
             formErrors.name = (nameRegex.test(value) && value.length >= 3) ? '': 'Minimo 3 caracteres';  
             break;
            case 'Email':
                formErrors.email = emailRegex.test(value) ? '' : 'Correo electronico invalido';  
             break;  
            case 'Numero':
             formErrors.number =(numberRegex.test(value)&& value.length >=10) ? '': 'Ingresar 10 numeros como minimo';  
             break;  
            case 'Comentario':
             formErrors.comment = value.length < 4 ? 'Minimo 4 caracteres': '';  
             break;   
             default: 
             break;
        }

      this.setState({formErrors, [name]: value})  
    }

    selectHandler = selectedOption=>{
        this.setState({ selectedOption },() =>console.log(this.state.selectedOption.label));
    }

    // handleEmailChange = (event) =>{
    //     this.setState({
    //         email: event.target.value
    //     })
    // }
    // handleNameChange = (event) =>{
    //     this.setState({
    //         name: event.target.value
    //     })
    // }
    // handleNumberChange = (event) =>{
    //     this.setState({
    //         number: event.target.value
    //     })
    // }
    // handleCommentChange = (event) =>{
    //     this.setState({
    //         comment: event.target.value
    //     })
    // }
    handleSubmit = (event)=>{
        event.preventDefault();
        if (formValid(this.state)&& this.name.value !=="" && this.email.value !=="" && this.state.selectedOption!==null ){
        window.Email.send({
            SecureToken:"14c5e7d9-baa7-408a-8cdd-669e929b4302",
            From : `${this.email.value}`,
            To : `codanai666@gmail.com`,
            Subject : "Estoy interesado en su boletín",
            Body : `El numero telefonico de este usuario es: ${this.number.value}.\r\n
            El correo es: ${this.email.value}\r\n
            El nombre del usuario es: ${this.name.value}\r\n
            El comentario es: ${this.comment.value}
            La opcion del select es: ${this.state.selectedOption.label} 
            `
        }).then(
          message => alert("!Se ha enviado la informacion correctamente¡")
        );
    //     console.log(`
    //     --SUBMITTING--
    //     Name: ${this.name.value}
    //     Email: ${this.email.value}
    //     Number: ${this.number.value}
    //     Comment: ${this.comment.value}
    //   `);
        this.email.value="";
        this.number.value="";
        this.name.value="";
        this.comment.value="";
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
                className={formErrors.name.length > 0 ? "error" : "name"} 
                type="text"
                name="Nombre"
                noValidate
                placeholder="Nombre" 
                defaultValue={this.state.name}
                onChange={this.handleChange} 
                ref={(el) => (this.name=el)}
                />
                {formErrors.name.length > 0 && (
                    <span className="errorMessage">{formErrors.name}</span>
                )}
            </div>
            <br/>
            <div>
                <input 
                className={formErrors.email.length > 0 ? "error" : "email"} 
                type="email"
                name="Email" 
                noValidate
                placeholder="Córreo Electronico" 
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
            className={formErrors.number.length > 0 ? "error" : "number"} 
            type="tel" 
            name="Numero"
            noValidate
            placeholder="Número de Cel. (Opcional)"
            defaultValue={this.state.number}
            onChange={this.handleChange}
            ref={(el) => (this.number=el)} 
            />
            {formErrors.number.length > 0 && (
                    <span className="errorMessage">{formErrors.number}</span>
                )}
            <br/>
            <br/>
            <Select
           className="mt-4 col-md-6 col-offset-4"
           onChange={this.selectHandler}
           options={ techCompanies }
           placeholder={"Seleccione el tipo de servicio que requiera"}
           components={{ SingleValue }}
           styles={customStyles}
           name="Menu"
         />
         <br/>
            <textarea 
            id="title"
            className={formErrors.comment.length > 0 ? "error" : "name"} 
            type="text"
            name="Comentario"
            noValidate
            defaultValue={this.state.comment}
            onChange={this.handleChange}
            ref={(el) => (this.comment=el)} 
            rows="8" 
            cols="30" 
            placeholder="Dejanos tus comentarios aquí"></textarea>
            <br/>
            <br/>
            <button 
            className='button'
            type="submit"
            ref={btn => { this.btn = btn; }}>Enviar Datos</button>
            </form>
            
        )
    }
}

export default Contact
