import React, {useState} from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Sidebar from '../../components/Sidebar'
import {
    InfoContainer,
    InfoWrapper, 
    TextWrapper,
    Title,
    TopParagraft,
    SubTitle,  
    Sentence,
    List,
    SubParagraft,
    
    } from './AvisoElements'

const Aviso = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
        setIsOpen(!isOpen)
    } 
    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <InfoContainer>
            <InfoWrapper>
                    <TextWrapper>
                        <Title>Aviso de Privacidad</Title>
                        <hr/>
                        <br/>
                        <TopParagraft>
                        CODANAI Software, S.A. de C. V. , con domicilio en Av. Antonio de Montes #7509 y Av. George Washington, Chihuahua, Chihuahua, C. P. 31210, en calidad de responsable de recabar sus datos personales, de conformidad con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, su reglamento y demás disposiciones aplicables hace de su conocimiento el presente:
                        </TopParagraft>
                        <SubTitle>Datos Personales</SubTitle>
                        <Sentence>Los datos personales que utiliza CODANAI Software son:</Sentence>
                        <List>Nombre completo</List>
                        <List>Telefono movil</List>
                        <List>Correo electrónico</List>
                        <SubParagraft>Existen opciones dentro de nuestro sitio web donde podremos obtener datos personales de una tercera persona (por ejemplo, un sitio de Internet puede permitirle mandar información de nuestros productos y servicios a un amigo, en cuyo caso requeriremos el nombre de esa persona y su dirección de correo electrónico). Para ello necesitamos que usted cuente con el consentimiento de dicha persona, por lo que si nos envía la citada información, entenderemos que ha solicitado previamente la autorización del titular de los datos, para compartirlo con nosotros.</SubParagraft>
                        <TopParagraft>
                        CODANAI Software, S.A. de C. V. , con domicilio en Av. Antonio de Montes #7509 y Av. George Washington, Chihuahua, Chihuahua, C. P. 31210, en calidad de responsable de recabar sus datos personales, de conformidad con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, su reglamento y demás disposiciones aplicables hace de su conocimiento el presente:
                        </TopParagraft>
                        <SubTitle>Datos Personales</SubTitle>
                        <Sentence>Los datos personales que utiliza CODANAI Software son:</Sentence>
                        <List>Nombre completo</List>
                        <List>Telefono movil</List>
                        <List>Correo electrónico</List>
                        <SubParagraft>Existen opciones dentro de nuestro sitio web donde podremos obtener datos personales de una tercera persona (por ejemplo, un sitio de Internet puede permitirle mandar información de nuestros productos y servicios a un amigo, en cuyo caso requeriremos el nombre de esa persona y su dirección de correo electrónico). Para ello necesitamos que usted cuente con el consentimiento de dicha persona, por lo que si nos envía la citada información, entenderemos que ha solicitado previamente la autorización del titular de los datos, para compartirlo con nosotros.</SubParagraft>
                    </TextWrapper>
           </InfoWrapper>
        </InfoContainer>
           <Footer/>
        </>
    )
}

export default Aviso