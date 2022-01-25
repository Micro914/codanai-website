import React from 'react'
import Icon1 from '../../images/svg-6.svg'
import Icon2 from '../../images/svg-5.svg'
import Icon3 from '../../images/svg-4.svg'
import Icon4 from '../../images/ITManagement.svg'
import {
ServicesContainer, 
ServicesH1, 
ServicesWrapper, 
ServicesCard, 
ServicesIcon, 
ServicesH2, 
ServicesP} from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Nuestros Servicios</ServicesH1>
            <ServicesWrapper>
            <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Desarrollo de Software</ServicesH2>
                    <ServicesP>Producimos software seguro y a la medida donde solo tu tienes acceso a el</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Páginas Web</ServicesH2>
                    <ServicesP>Creamos páginas web que se adaptan a las necesidades de cada cliente</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Aplicaciónes</ServicesH2>
                    <ServicesP>Ofrecemos control de tus sistemas desde una aplicación</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon4}/>
                    <ServicesH2>IT Management</ServicesH2>
                    <ServicesP>Cubrimos las necesidades de tu negocio con soporte de TI con personal capacitado</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
