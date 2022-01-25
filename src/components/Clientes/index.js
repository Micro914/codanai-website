import React from 'react'
import Icon1 from '../../images/WESPORT.png'
import Icon2 from '../../images/nejuve.png'
import Icon3 from '../../images/A2MR.png'
import Icon4 from '../../images/Abakus.png'
import Icon5 from '../../images/Acsender.png'
import Icon6 from '../../images/Dismed.png'
import Icon7 from '../../images/MRZ.png'
import Icon8 from '../../images/MVP.png'
import Icon9 from '../../images/SS.png'
import {
ClientContainer, 
ClientH1, 
ClientWrapper, 
ClientCard, 
ClientIcon, 
ClientIcon2, 
} from './ClientesElements';

const Clientes = () => {
    return (
        <ClientContainer id="clientes">
            <ClientH1>Nuestros Clientes:</ClientH1>
            <ClientWrapper>
                <ClientCard>
                    <ClientIcon src={Icon1}/>
                </ClientCard>
                <ClientCard>
                    <ClientIcon2 src={Icon2}/>
                </ClientCard>
                <ClientCard>
                    <ClientIcon2 src={Icon3}/>
                </ClientCard>
                <ClientCard>
                    <ClientIcon src={Icon4}/>
                </ClientCard>
                <ClientCard>
                    <ClientIcon src={Icon5}/>
                </ClientCard>
                <ClientCard>
                    <ClientIcon2 src={Icon6}/>
                </ClientCard>
                <ClientCard>
                    <ClientIcon2 src={Icon7}/>
                </ClientCard>
                <ClientCard>
                    <ClientIcon src={Icon9}/>
                </ClientCard>
                <ClientCard>
                    <ClientIcon src={Icon8}/>
                </ClientCard>
            </ClientWrapper>
        </ClientContainer>
    )
}

export default Clientes
